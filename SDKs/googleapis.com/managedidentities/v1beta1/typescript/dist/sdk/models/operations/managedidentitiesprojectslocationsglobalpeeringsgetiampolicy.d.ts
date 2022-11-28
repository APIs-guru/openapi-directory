import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyQueryParams;
    security: ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
