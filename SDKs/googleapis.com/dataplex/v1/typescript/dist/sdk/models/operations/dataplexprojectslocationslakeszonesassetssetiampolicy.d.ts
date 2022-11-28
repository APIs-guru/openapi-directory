import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyQueryParams;
    request?: shared.GoogleIamV1SetIamPolicyRequest;
    security: DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1Policy?: shared.GoogleIamV1Policy;
    statusCode: number;
}
