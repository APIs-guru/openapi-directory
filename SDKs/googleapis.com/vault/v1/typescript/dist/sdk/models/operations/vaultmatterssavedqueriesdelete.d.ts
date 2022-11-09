import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersSavedQueriesDeletePathParams extends SpeakeasyBase {
    matterId: string;
    savedQueryId: string;
}
export declare class VaultMattersSavedQueriesDeleteQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersSavedQueriesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersSavedQueriesDeleteRequest extends SpeakeasyBase {
    pathParams: VaultMattersSavedQueriesDeletePathParams;
    queryParams: VaultMattersSavedQueriesDeleteQueryParams;
    security: VaultMattersSavedQueriesDeleteSecurity;
}
export declare class VaultMattersSavedQueriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
