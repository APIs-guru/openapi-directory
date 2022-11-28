import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IamProjectsServiceAccountsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsSetIamPolicyPathParams;
    queryParams: IamProjectsServiceAccountsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: IamProjectsServiceAccountsSetIamPolicySecurity;
}
export declare class IamProjectsServiceAccountsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
