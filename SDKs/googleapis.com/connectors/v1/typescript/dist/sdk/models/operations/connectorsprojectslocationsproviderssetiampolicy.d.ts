import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ConnectorsProjectsLocationsProvidersSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsProvidersSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersSetIamPolicyPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ConnectorsProjectsLocationsProvidersSetIamPolicySecurity;
}
export declare class ConnectorsProjectsLocationsProvidersSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
