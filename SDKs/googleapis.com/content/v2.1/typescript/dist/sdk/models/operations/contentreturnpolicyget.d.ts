import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyGetPathParams extends SpeakeasyBase {
    merchantId: string;
    returnPolicyId: string;
}
export declare class ContentReturnpolicyGetQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyGetRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyGetPathParams;
    queryParams: ContentReturnpolicyGetQueryParams;
    security: ContentReturnpolicyGetSecurity;
}
export declare class ContentReturnpolicyGetResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicy?: shared.ReturnPolicy;
    statusCode: number;
}
