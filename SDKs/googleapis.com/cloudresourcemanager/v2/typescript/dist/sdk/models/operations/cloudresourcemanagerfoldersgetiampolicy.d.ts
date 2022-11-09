import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerFoldersGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerFoldersGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerFoldersGetIamPolicySecurityOption1;
    option2?: CloudresourcemanagerFoldersGetIamPolicySecurityOption2;
}
export declare class CloudresourcemanagerFoldersGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerFoldersGetIamPolicyPathParams;
    queryParams: CloudresourcemanagerFoldersGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: CloudresourcemanagerFoldersGetIamPolicySecurity;
}
export declare class CloudresourcemanagerFoldersGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
