import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsSetIamPolicyPathParams;
    queryParams: CloudresourcemanagerProjectsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudresourcemanagerProjectsSetIamPolicySecurity;
}
export declare class CloudresourcemanagerProjectsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
