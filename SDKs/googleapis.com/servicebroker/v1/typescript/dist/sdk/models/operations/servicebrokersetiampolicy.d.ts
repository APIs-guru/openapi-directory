import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicebrokerSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicebrokerSetIamPolicyPathParams;
    queryParams: ServicebrokerSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: ServicebrokerSetIamPolicySecurity;
}
export declare class ServicebrokerSetIamPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
