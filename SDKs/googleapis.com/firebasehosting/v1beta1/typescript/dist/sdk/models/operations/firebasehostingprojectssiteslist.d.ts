import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingProjectsSitesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingProjectsSitesListQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingProjectsSitesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingProjectsSitesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingProjectsSitesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingProjectsSitesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingProjectsSitesListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingProjectsSitesListSecurityOption1;
    option2?: FirebasehostingProjectsSitesListSecurityOption2;
    option3?: FirebasehostingProjectsSitesListSecurityOption3;
    option4?: FirebasehostingProjectsSitesListSecurityOption4;
}
export declare class FirebasehostingProjectsSitesListRequest extends SpeakeasyBase {
    pathParams: FirebasehostingProjectsSitesListPathParams;
    queryParams: FirebasehostingProjectsSitesListQueryParams;
    security: FirebasehostingProjectsSitesListSecurity;
}
export declare class FirebasehostingProjectsSitesListResponse extends SpeakeasyBase {
    contentType: string;
    listSitesResponse?: shared.ListSitesResponse;
    statusCode: number;
}
