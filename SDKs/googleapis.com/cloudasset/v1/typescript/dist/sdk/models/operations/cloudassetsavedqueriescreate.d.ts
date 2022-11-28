import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSavedQueriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetSavedQueriesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    savedQueryId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetSavedQueriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSavedQueriesCreateRequest extends SpeakeasyBase {
    pathParams: CloudassetSavedQueriesCreatePathParams;
    queryParams: CloudassetSavedQueriesCreateQueryParams;
    request?: shared.SavedQueryInput;
    security: CloudassetSavedQueriesCreateSecurity;
}
export declare class CloudassetSavedQueriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    savedQuery?: shared.SavedQuery;
    statusCode: number;
}
