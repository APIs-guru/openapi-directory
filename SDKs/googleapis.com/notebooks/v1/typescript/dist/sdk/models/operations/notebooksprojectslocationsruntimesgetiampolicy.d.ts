import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsRuntimesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams;
    security: NotebooksProjectsLocationsRuntimesGetIamPolicySecurity;
}
export declare class NotebooksProjectsLocationsRuntimesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
