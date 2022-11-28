import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerFoldersSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerFoldersSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerFoldersSetIamPolicyPathParams;
    queryParams: CloudresourcemanagerFoldersSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudresourcemanagerFoldersSetIamPolicySecurity;
}
export declare class CloudresourcemanagerFoldersSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
