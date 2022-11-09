import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerTagValuesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagValuesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagValuesGetIamPolicySecurityOption1;
    option2?: CloudresourcemanagerTagValuesGetIamPolicySecurityOption2;
}
export declare class CloudresourcemanagerTagValuesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesGetIamPolicyPathParams;
    queryParams: CloudresourcemanagerTagValuesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: CloudresourcemanagerTagValuesGetIamPolicySecurity;
}
export declare class CloudresourcemanagerTagValuesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
