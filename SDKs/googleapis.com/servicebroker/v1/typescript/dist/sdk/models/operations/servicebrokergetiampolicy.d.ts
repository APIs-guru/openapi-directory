import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicebrokerGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicebrokerGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicebrokerGetIamPolicyPathParams;
    queryParams: ServicebrokerGetIamPolicyQueryParams;
    security: ServicebrokerGetIamPolicySecurity;
}
export declare class ServicebrokerGetIamPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
