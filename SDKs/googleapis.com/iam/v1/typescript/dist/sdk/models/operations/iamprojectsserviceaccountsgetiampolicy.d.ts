import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IamProjectsServiceAccountsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsGetIamPolicyPathParams;
    queryParams: IamProjectsServiceAccountsGetIamPolicyQueryParams;
    security: IamProjectsServiceAccountsGetIamPolicySecurity;
}
export declare class IamProjectsServiceAccountsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
