import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAddFirebasePathParams extends SpeakeasyBase {
    project: string;
}
export declare class FirebaseProjectsAddFirebaseQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAddFirebaseSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAddFirebaseSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAddFirebaseSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAddFirebaseSecurityOption1;
    option2?: FirebaseProjectsAddFirebaseSecurityOption2;
}
export declare class FirebaseProjectsAddFirebaseRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAddFirebasePathParams;
    queryParams: FirebaseProjectsAddFirebaseQueryParams;
    request?: shared.AddFirebaseRequest;
    security: FirebaseProjectsAddFirebaseSecurity;
}
export declare class FirebaseProjectsAddFirebaseResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
