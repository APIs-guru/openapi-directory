import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesDomainsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesDomainsCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesDomainsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsCreateSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesDomainsCreateSecurityOption1;
    option2?: FirebasehostingSitesDomainsCreateSecurityOption2;
}
export declare class FirebasehostingSitesDomainsCreateRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesDomainsCreatePathParams;
    queryParams: FirebasehostingSitesDomainsCreateQueryParams;
    request?: shared.Domain;
    security: FirebasehostingSitesDomainsCreateSecurity;
}
export declare class FirebasehostingSitesDomainsCreateResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}
