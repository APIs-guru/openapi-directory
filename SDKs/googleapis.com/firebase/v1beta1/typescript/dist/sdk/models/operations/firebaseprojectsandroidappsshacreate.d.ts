import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAndroidAppsShaCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsAndroidAppsShaCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAndroidAppsShaCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaCreateSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAndroidAppsShaCreateSecurityOption1;
    option2?: FirebaseProjectsAndroidAppsShaCreateSecurityOption2;
}
export declare class FirebaseProjectsAndroidAppsShaCreateRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAndroidAppsShaCreatePathParams;
    queryParams: FirebaseProjectsAndroidAppsShaCreateQueryParams;
    request?: shared.ShaCertificate;
    security: FirebaseProjectsAndroidAppsShaCreateSecurity;
}
export declare class FirebaseProjectsAndroidAppsShaCreateResponse extends SpeakeasyBase {
    contentType: string;
    shaCertificate?: shared.ShaCertificate;
    statusCode: number;
}
