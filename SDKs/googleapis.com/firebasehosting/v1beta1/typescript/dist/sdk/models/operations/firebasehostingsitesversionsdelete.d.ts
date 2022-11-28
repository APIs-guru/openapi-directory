import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasehostingSitesVersionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesVersionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsDeleteSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsDeleteSecurityOption1;
    option2?: FirebasehostingSitesVersionsDeleteSecurityOption2;
}
export declare class FirebasehostingSitesVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsDeletePathParams;
    queryParams: FirebasehostingSitesVersionsDeleteQueryParams;
    security: FirebasehostingSitesVersionsDeleteSecurity;
}
export declare class FirebasehostingSitesVersionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
