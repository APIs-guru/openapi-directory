import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingProjectsSitesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingProjectsSitesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    siteId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingProjectsSitesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingProjectsSitesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingProjectsSitesCreateSecurity extends SpeakeasyBase {
    option1?: FirebasehostingProjectsSitesCreateSecurityOption1;
    option2?: FirebasehostingProjectsSitesCreateSecurityOption2;
}
export declare class FirebasehostingProjectsSitesCreateRequest extends SpeakeasyBase {
    pathParams: FirebasehostingProjectsSitesCreatePathParams;
    queryParams: FirebasehostingProjectsSitesCreateQueryParams;
    request?: shared.SiteInput;
    security: FirebasehostingProjectsSitesCreateSecurity;
}
export declare class FirebasehostingProjectsSitesCreateResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
