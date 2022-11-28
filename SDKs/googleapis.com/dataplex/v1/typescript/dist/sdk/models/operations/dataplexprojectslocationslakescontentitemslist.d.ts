import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesContentitemsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesContentitemsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesContentitemsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesContentitemsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesContentitemsListPathParams;
    queryParams: DataplexProjectsLocationsLakesContentitemsListQueryParams;
    security: DataplexProjectsLocationsLakesContentitemsListSecurity;
}
export declare class DataplexProjectsLocationsLakesContentitemsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListContentResponse?: shared.GoogleCloudDataplexV1ListContentResponse;
    statusCode: number;
}
