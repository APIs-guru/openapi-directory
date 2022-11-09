import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesGetIamPolicyPathParams;
    queryParams: DatafusionProjectsLocationsInstancesGetIamPolicyQueryParams;
    security: DatafusionProjectsLocationsInstancesGetIamPolicySecurity;
}
export declare class DatafusionProjectsLocationsInstancesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
