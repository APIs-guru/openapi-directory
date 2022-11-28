import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsReleasesGetExecutablePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1",
    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}
export declare class FirebaserulesProjectsReleasesGetExecutableQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    executableVersion?: FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsReleasesGetExecutableSecurityOption1;
    option2?: FirebaserulesProjectsReleasesGetExecutableSecurityOption2;
    option3?: FirebaserulesProjectsReleasesGetExecutableSecurityOption3;
}
export declare class FirebaserulesProjectsReleasesGetExecutableRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsReleasesGetExecutablePathParams;
    queryParams: FirebaserulesProjectsReleasesGetExecutableQueryParams;
    security: FirebaserulesProjectsReleasesGetExecutableSecurity;
}
export declare class FirebaserulesProjectsReleasesGetExecutableResponse extends SpeakeasyBase {
    contentType: string;
    getReleaseExecutableResponse?: shared.GetReleaseExecutableResponse;
    statusCode: number;
}
