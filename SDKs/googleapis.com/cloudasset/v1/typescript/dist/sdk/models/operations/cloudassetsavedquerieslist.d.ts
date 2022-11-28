import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetSavedQueriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetSavedQueriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudassetSavedQueriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetSavedQueriesListRequest extends SpeakeasyBase {
    pathParams: CloudassetSavedQueriesListPathParams;
    queryParams: CloudassetSavedQueriesListQueryParams;
    security: CloudassetSavedQueriesListSecurity;
}
export declare class CloudassetSavedQueriesListResponse extends SpeakeasyBase {
    contentType: string;
    listSavedQueriesResponse?: shared.ListSavedQueriesResponse;
    statusCode: number;
}
