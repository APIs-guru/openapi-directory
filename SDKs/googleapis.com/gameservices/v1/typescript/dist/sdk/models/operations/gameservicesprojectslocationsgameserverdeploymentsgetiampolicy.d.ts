import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams;
    queryParams: GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams;
    security: GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity;
}
export declare class GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
