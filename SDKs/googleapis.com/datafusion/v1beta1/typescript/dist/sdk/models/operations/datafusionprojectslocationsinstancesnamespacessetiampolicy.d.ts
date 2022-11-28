import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams;
    queryParams: DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
