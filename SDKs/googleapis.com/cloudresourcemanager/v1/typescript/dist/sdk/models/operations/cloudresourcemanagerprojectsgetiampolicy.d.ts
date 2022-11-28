import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsGetIamPolicySecurityOption1;
    option2?: CloudresourcemanagerProjectsGetIamPolicySecurityOption2;
}
export declare class CloudresourcemanagerProjectsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsGetIamPolicyPathParams;
    queryParams: CloudresourcemanagerProjectsGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: CloudresourcemanagerProjectsGetIamPolicySecurity;
}
export declare class CloudresourcemanagerProjectsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
