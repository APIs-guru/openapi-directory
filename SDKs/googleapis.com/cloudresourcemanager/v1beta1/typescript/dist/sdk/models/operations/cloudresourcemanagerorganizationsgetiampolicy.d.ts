import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOrganizationsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerOrganizationsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerOrganizationsGetIamPolicySecurityOption1;
    option2?: CloudresourcemanagerOrganizationsGetIamPolicySecurityOption2;
}
export declare class CloudresourcemanagerOrganizationsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerOrganizationsGetIamPolicyPathParams;
    queryParams: CloudresourcemanagerOrganizationsGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: CloudresourcemanagerOrganizationsGetIamPolicySecurity;
}
export declare class CloudresourcemanagerOrganizationsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
