import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyonlinePatchPathParams extends SpeakeasyBase {
    merchantId: string;
    returnPolicyId: string;
}
export declare class ContentReturnpolicyonlinePatchQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyonlinePatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyonlinePatchRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyonlinePatchPathParams;
    queryParams: ContentReturnpolicyonlinePatchQueryParams;
    request?: shared.ReturnPolicyOnlineInput;
    security: ContentReturnpolicyonlinePatchSecurity;
}
export declare class ContentReturnpolicyonlinePatchResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicyOnline?: shared.ReturnPolicyOnline;
    statusCode: number;
}
