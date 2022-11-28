import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
