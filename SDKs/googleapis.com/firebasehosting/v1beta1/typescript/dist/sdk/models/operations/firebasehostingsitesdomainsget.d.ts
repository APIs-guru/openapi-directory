import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesDomainsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasehostingSitesDomainsGetQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesDomainsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsGetSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesDomainsGetSecurityOption1;
    option2?: FirebasehostingSitesDomainsGetSecurityOption2;
    option3?: FirebasehostingSitesDomainsGetSecurityOption3;
    option4?: FirebasehostingSitesDomainsGetSecurityOption4;
}
export declare class FirebasehostingSitesDomainsGetRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesDomainsGetPathParams;
    queryParams: FirebasehostingSitesDomainsGetQueryParams;
    security: FirebasehostingSitesDomainsGetSecurity;
}
export declare class FirebasehostingSitesDomainsGetResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}
