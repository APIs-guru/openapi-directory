import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    returnPolicyId: string;
}
export declare class ContentReturnpolicyDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyDeleteRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyDeletePathParams;
    queryParams: ContentReturnpolicyDeleteQueryParams;
    security: ContentReturnpolicyDeleteSecurity;
}
export declare class ContentReturnpolicyDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
