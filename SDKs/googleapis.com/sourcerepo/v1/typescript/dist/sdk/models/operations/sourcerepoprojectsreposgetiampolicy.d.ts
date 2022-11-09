import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SourcerepoProjectsReposGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetIamPolicySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetIamPolicySecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposGetIamPolicySecurityOption1;
    option2?: SourcerepoProjectsReposGetIamPolicySecurityOption2;
    option3?: SourcerepoProjectsReposGetIamPolicySecurityOption3;
    option4?: SourcerepoProjectsReposGetIamPolicySecurityOption4;
}
export declare class SourcerepoProjectsReposGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposGetIamPolicyPathParams;
    queryParams: SourcerepoProjectsReposGetIamPolicyQueryParams;
    security: SourcerepoProjectsReposGetIamPolicySecurity;
}
export declare class SourcerepoProjectsReposGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
