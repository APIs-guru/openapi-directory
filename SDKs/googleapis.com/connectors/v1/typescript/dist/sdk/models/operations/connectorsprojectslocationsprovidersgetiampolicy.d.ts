import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsProvidersGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersGetIamPolicyQueryParams;
    security: ConnectorsProjectsLocationsProvidersGetIamPolicySecurity;
}
export declare class ConnectorsProjectsLocationsProvidersGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
