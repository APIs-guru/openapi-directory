import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SourcerepoProjectsReposSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposSetIamPolicySecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposSetIamPolicySecurityOption1;
    option2?: SourcerepoProjectsReposSetIamPolicySecurityOption2;
}
export declare class SourcerepoProjectsReposSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposSetIamPolicyPathParams;
    queryParams: SourcerepoProjectsReposSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: SourcerepoProjectsReposSetIamPolicySecurity;
}
export declare class SourcerepoProjectsReposSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
