import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAndroidAppsShaDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseProjectsAndroidAppsShaDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAndroidAppsShaDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaDeleteSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAndroidAppsShaDeleteSecurityOption1;
    option2?: FirebaseProjectsAndroidAppsShaDeleteSecurityOption2;
}
export declare class FirebaseProjectsAndroidAppsShaDeleteRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAndroidAppsShaDeletePathParams;
    queryParams: FirebaseProjectsAndroidAppsShaDeleteQueryParams;
    security: FirebaseProjectsAndroidAppsShaDeleteSecurity;
}
export declare class FirebaseProjectsAndroidAppsShaDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
