import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyonlineCreatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentReturnpolicyonlineCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyonlineCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyonlineCreateRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyonlineCreatePathParams;
    queryParams: ContentReturnpolicyonlineCreateQueryParams;
    request?: shared.ReturnPolicyOnlineInput;
    security: ContentReturnpolicyonlineCreateSecurity;
}
export declare class ContentReturnpolicyonlineCreateResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicyOnline?: shared.ReturnPolicyOnline;
    statusCode: number;
}
