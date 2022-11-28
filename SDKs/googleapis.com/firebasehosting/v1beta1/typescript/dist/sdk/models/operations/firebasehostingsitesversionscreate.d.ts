import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesVersionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sizeBytes?: string;
    uploadType?: string;
    uploadProtocol?: string;
    versionId?: string;
}
export declare class FirebasehostingSitesVersionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsCreateSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsCreateSecurityOption1;
    option2?: FirebasehostingSitesVersionsCreateSecurityOption2;
}
export declare class FirebasehostingSitesVersionsCreateRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsCreatePathParams;
    queryParams: FirebasehostingSitesVersionsCreateQueryParams;
    request?: shared.Version;
    security: FirebasehostingSitesVersionsCreateSecurity;
}
export declare class FirebasehostingSitesVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
