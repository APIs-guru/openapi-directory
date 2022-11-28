import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersSavedQueriesCreatePathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersSavedQueriesCreateQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersSavedQueriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersSavedQueriesCreateRequest extends SpeakeasyBase {
    pathParams: VaultMattersSavedQueriesCreatePathParams;
    queryParams: VaultMattersSavedQueriesCreateQueryParams;
    request?: shared.SavedQuery;
    security: VaultMattersSavedQueriesCreateSecurity;
}
export declare class VaultMattersSavedQueriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    savedQuery?: shared.SavedQuery;
    statusCode: number;
}
