import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesReleasesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesReleasesCreateQueryParams extends SpeakeasyBase {
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
    versionName?: string;
}
export declare class FirebasehostingSitesReleasesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesReleasesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesReleasesCreateSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesReleasesCreateSecurityOption1;
    option2?: FirebasehostingSitesReleasesCreateSecurityOption2;
}
export declare class FirebasehostingSitesReleasesCreateRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesReleasesCreatePathParams;
    queryParams: FirebasehostingSitesReleasesCreateQueryParams;
    request?: shared.Release;
    security: FirebasehostingSitesReleasesCreateSecurity;
}
export declare class FirebasehostingSitesReleasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    release?: shared.Release;
    statusCode: number;
}
