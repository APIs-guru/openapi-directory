import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesDomainsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasehostingSitesDomainsUpdateQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesDomainsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsUpdateSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesDomainsUpdateSecurityOption1;
    option2?: FirebasehostingSitesDomainsUpdateSecurityOption2;
}
export declare class FirebasehostingSitesDomainsUpdateRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesDomainsUpdatePathParams;
    queryParams: FirebasehostingSitesDomainsUpdateQueryParams;
    request?: shared.Domain;
    security: FirebasehostingSitesDomainsUpdateSecurity;
}
export declare class FirebasehostingSitesDomainsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}
