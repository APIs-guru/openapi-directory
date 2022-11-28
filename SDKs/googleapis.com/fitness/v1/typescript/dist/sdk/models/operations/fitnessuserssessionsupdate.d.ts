import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersSessionsUpdatePathParams extends SpeakeasyBase {
    sessionId: string;
    userId: string;
}
export declare class FitnessUsersSessionsUpdateQueryParams extends SpeakeasyBase {
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
export declare class FitnessUsersSessionsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersSessionsUpdateSecurity extends SpeakeasyBase {
    option1?: FitnessUsersSessionsUpdateSecurityOption1;
    option2?: FitnessUsersSessionsUpdateSecurityOption2;
}
export declare class FitnessUsersSessionsUpdateRequest extends SpeakeasyBase {
    pathParams: FitnessUsersSessionsUpdatePathParams;
    queryParams: FitnessUsersSessionsUpdateQueryParams;
    request?: shared.Session;
    security: FitnessUsersSessionsUpdateSecurity;
}
export declare class FitnessUsersSessionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    session?: shared.Session;
    statusCode: number;
}
