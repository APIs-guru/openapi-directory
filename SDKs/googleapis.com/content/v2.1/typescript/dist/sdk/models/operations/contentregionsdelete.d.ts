import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionsDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    regionId: string;
}
export declare class ContentRegionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentRegionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionsDeleteRequest extends SpeakeasyBase {
    pathParams: ContentRegionsDeletePathParams;
    queryParams: ContentRegionsDeleteQueryParams;
    security: ContentRegionsDeleteSecurity;
}
export declare class ContentRegionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
