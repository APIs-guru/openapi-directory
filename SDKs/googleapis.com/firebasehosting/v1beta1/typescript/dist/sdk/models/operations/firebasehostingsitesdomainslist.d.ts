import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesDomainsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesDomainsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesDomainsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesDomainsListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesDomainsListSecurityOption1;
    option2?: FirebasehostingSitesDomainsListSecurityOption2;
    option3?: FirebasehostingSitesDomainsListSecurityOption3;
    option4?: FirebasehostingSitesDomainsListSecurityOption4;
}
export declare class FirebasehostingSitesDomainsListRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesDomainsListPathParams;
    queryParams: FirebasehostingSitesDomainsListQueryParams;
    security: FirebasehostingSitesDomainsListSecurity;
}
export declare class FirebasehostingSitesDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
}
