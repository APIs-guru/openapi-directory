import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyPathParams;
    queryParams: GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity;
}
export declare class GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
