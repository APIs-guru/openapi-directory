import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyPathParams;
    queryParams: DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyQueryParams;
    security: DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
