import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersSessionsDeletePathParams extends SpeakeasyBase {
    sessionId: string;
    userId: string;
}
export declare class FitnessUsersSessionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class FitnessUsersSessionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsDeleteSecurity extends SpeakeasyBase {
    option1?: FitnessUsersSessionsDeleteSecurityOption1;
    option2?: FitnessUsersSessionsDeleteSecurityOption2;
}
export declare class FitnessUsersSessionsDeleteRequest extends SpeakeasyBase {
    pathParams: FitnessUsersSessionsDeletePathParams;
    queryParams: FitnessUsersSessionsDeleteQueryParams;
    security: FitnessUsersSessionsDeleteSecurity;
}
export declare class FitnessUsersSessionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
