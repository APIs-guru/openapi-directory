import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretmanagerProjectsSecretsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SecretmanagerProjectsSecretsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SecretmanagerProjectsSecretsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecretmanagerProjectsSecretsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SecretmanagerProjectsSecretsSetIamPolicyPathParams;
    queryParams: SecretmanagerProjectsSecretsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: SecretmanagerProjectsSecretsSetIamPolicySecurity;
}
export declare class SecretmanagerProjectsSecretsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
