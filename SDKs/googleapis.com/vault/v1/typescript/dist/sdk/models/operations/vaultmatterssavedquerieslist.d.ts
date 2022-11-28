import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersSavedQueriesListPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersSavedQueriesListQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersSavedQueriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersSavedQueriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersSavedQueriesListSecurity extends SpeakeasyBase {
    option1?: VaultMattersSavedQueriesListSecurityOption1;
    option2?: VaultMattersSavedQueriesListSecurityOption2;
}
export declare class VaultMattersSavedQueriesListRequest extends SpeakeasyBase {
    pathParams: VaultMattersSavedQueriesListPathParams;
    queryParams: VaultMattersSavedQueriesListQueryParams;
    security: VaultMattersSavedQueriesListSecurity;
}
export declare class VaultMattersSavedQueriesListResponse extends SpeakeasyBase {
    contentType: string;
    listSavedQueriesResponse?: shared.ListSavedQueriesResponse;
    statusCode: number;
}
