import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyonlineDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    returnPolicyId: string;
}
export declare class ContentReturnpolicyonlineDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyonlineDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyonlineDeleteRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyonlineDeletePathParams;
    queryParams: ContentReturnpolicyonlineDeleteQueryParams;
    security: ContentReturnpolicyonlineDeleteSecurity;
}
export declare class ContentReturnpolicyonlineDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
