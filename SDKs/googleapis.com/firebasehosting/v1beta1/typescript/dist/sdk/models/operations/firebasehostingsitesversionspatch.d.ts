import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasehostingSitesVersionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesVersionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsPatchSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsPatchSecurityOption1;
    option2?: FirebasehostingSitesVersionsPatchSecurityOption2;
}
export declare class FirebasehostingSitesVersionsPatchRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsPatchPathParams;
    queryParams: FirebasehostingSitesVersionsPatchQueryParams;
    request?: shared.Version;
    security: FirebasehostingSitesVersionsPatchSecurity;
}
export declare class FirebasehostingSitesVersionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
