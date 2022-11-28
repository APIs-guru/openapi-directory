import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOrganizationsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerOrganizationsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerOrganizationsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerOrganizationsSetIamPolicyPathParams;
    queryParams: CloudresourcemanagerOrganizationsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudresourcemanagerOrganizationsSetIamPolicySecurity;
}
export declare class CloudresourcemanagerOrganizationsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
