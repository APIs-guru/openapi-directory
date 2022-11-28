import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataplexProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsListPathParams;
    queryParams: DataplexProjectsLocationsListQueryParams;
    security: DataplexProjectsLocationsListSecurity;
}
export declare class DataplexProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudLocationListLocationsResponse?: shared.GoogleCloudLocationListLocationsResponse;
    statusCode: number;
}
