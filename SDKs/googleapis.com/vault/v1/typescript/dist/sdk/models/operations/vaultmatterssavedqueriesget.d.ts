import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersSavedQueriesGetPathParams extends SpeakeasyBase {
    matterId: string;
    savedQueryId: string;
}
export declare class VaultMattersSavedQueriesGetQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersSavedQueriesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersSavedQueriesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersSavedQueriesGetSecurity extends SpeakeasyBase {
    option1?: VaultMattersSavedQueriesGetSecurityOption1;
    option2?: VaultMattersSavedQueriesGetSecurityOption2;
}
export declare class VaultMattersSavedQueriesGetRequest extends SpeakeasyBase {
    pathParams: VaultMattersSavedQueriesGetPathParams;
    queryParams: VaultMattersSavedQueriesGetQueryParams;
    security: VaultMattersSavedQueriesGetSecurity;
}
export declare class VaultMattersSavedQueriesGetResponse extends SpeakeasyBase {
    contentType: string;
    savedQuery?: shared.SavedQuery;
    statusCode: number;
}
