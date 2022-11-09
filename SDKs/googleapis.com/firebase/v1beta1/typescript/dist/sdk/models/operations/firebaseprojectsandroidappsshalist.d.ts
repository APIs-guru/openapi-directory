import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAndroidAppsShaListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsAndroidAppsShaListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAndroidAppsShaListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsShaListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAndroidAppsShaListSecurityOption1;
    option2?: FirebaseProjectsAndroidAppsShaListSecurityOption2;
    option3?: FirebaseProjectsAndroidAppsShaListSecurityOption3;
    option4?: FirebaseProjectsAndroidAppsShaListSecurityOption4;
}
export declare class FirebaseProjectsAndroidAppsShaListRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAndroidAppsShaListPathParams;
    queryParams: FirebaseProjectsAndroidAppsShaListQueryParams;
    security: FirebaseProjectsAndroidAppsShaListSecurity;
}
export declare class FirebaseProjectsAndroidAppsShaListResponse extends SpeakeasyBase {
    contentType: string;
    listShaCertificatesResponse?: shared.ListShaCertificatesResponse;
    statusCode: number;
}
