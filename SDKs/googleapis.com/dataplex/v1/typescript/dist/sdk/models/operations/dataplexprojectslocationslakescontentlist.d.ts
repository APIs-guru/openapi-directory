import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesContentListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesContentListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesContentListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesContentListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesContentListPathParams;
    queryParams: DataplexProjectsLocationsLakesContentListQueryParams;
    security: DataplexProjectsLocationsLakesContentListSecurity;
}
export declare class DataplexProjectsLocationsLakesContentListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListContentResponse?: shared.GoogleCloudDataplexV1ListContentResponse;
    statusCode: number;
}
