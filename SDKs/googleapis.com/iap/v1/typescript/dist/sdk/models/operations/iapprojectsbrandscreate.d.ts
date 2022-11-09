import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IapProjectsBrandsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IapProjectsBrandsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IapProjectsBrandsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IapProjectsBrandsCreateRequest extends SpeakeasyBase {
    pathParams: IapProjectsBrandsCreatePathParams;
    queryParams: IapProjectsBrandsCreateQueryParams;
    request?: shared.Brand;
    security: IapProjectsBrandsCreateSecurity;
}
export declare class IapProjectsBrandsCreateResponse extends SpeakeasyBase {
    brand?: shared.Brand;
    contentType: string;
    statusCode: number;
}
