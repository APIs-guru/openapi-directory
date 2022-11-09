import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: NotebooksProjectsLocationsRuntimesSetIamPolicySecurity;
}
export declare class NotebooksProjectsLocationsRuntimesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
