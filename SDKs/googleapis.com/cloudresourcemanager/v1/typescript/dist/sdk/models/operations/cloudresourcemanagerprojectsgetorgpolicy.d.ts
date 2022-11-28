import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsGetOrgPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsGetOrgPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsGetOrgPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetOrgPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetOrgPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsGetOrgPolicySecurityOption1;
    option2?: CloudresourcemanagerProjectsGetOrgPolicySecurityOption2;
}
export declare class CloudresourcemanagerProjectsGetOrgPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsGetOrgPolicyPathParams;
    queryParams: CloudresourcemanagerProjectsGetOrgPolicyQueryParams;
    request?: shared.GetOrgPolicyRequest;
    security: CloudresourcemanagerProjectsGetOrgPolicySecurity;
}
export declare class CloudresourcemanagerProjectsGetOrgPolicyResponse extends SpeakeasyBase {
    contentType: string;
    orgPolicy?: shared.OrgPolicy;
    statusCode: number;
}
