import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsSetOrgPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsSetOrgPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsSetOrgPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsSetOrgPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsSetOrgPolicyPathParams;
    queryParams: CloudresourcemanagerProjectsSetOrgPolicyQueryParams;
    request?: shared.SetOrgPolicyRequest;
    security: CloudresourcemanagerProjectsSetOrgPolicySecurity;
}
export declare class CloudresourcemanagerProjectsSetOrgPolicyResponse extends SpeakeasyBase {
    contentType: string;
    orgPolicy?: shared.OrgPolicy;
    statusCode: number;
}
