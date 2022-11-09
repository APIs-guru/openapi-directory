import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1;
    option2?: CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2;
}
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams;
    queryParams: CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams;
    request?: shared.ListAvailableOrgPolicyConstraintsRequest;
    security: CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity;
}
export declare class CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse extends SpeakeasyBase {
    contentType: string;
    listAvailableOrgPolicyConstraintsResponse?: shared.ListAvailableOrgPolicyConstraintsResponse;
    statusCode: number;
}
