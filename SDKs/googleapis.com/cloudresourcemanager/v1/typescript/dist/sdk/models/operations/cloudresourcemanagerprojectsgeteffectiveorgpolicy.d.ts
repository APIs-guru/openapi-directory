import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1;
    option2?: CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams;
    queryParams: CloudresourcemanagerProjectsGetEffectiveOrgPolicyQueryParams;
    request?: shared.GetEffectiveOrgPolicyRequest;
    security: CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse extends SpeakeasyBase {
    contentType: string;
    orgPolicy?: shared.OrgPolicy;
    statusCode: number;
}
