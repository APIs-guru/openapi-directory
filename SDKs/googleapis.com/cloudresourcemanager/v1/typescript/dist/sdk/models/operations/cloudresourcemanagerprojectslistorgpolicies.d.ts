import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsListOrgPoliciesPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsListOrgPoliciesQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsListOrgPoliciesSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1;
    option2?: CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2;
}
export declare class CloudresourcemanagerProjectsListOrgPoliciesRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsListOrgPoliciesPathParams;
    queryParams: CloudresourcemanagerProjectsListOrgPoliciesQueryParams;
    request?: shared.ListOrgPoliciesRequest;
    security: CloudresourcemanagerProjectsListOrgPoliciesSecurity;
}
export declare class CloudresourcemanagerProjectsListOrgPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    listOrgPoliciesResponse?: shared.ListOrgPoliciesResponse;
    statusCode: number;
}
