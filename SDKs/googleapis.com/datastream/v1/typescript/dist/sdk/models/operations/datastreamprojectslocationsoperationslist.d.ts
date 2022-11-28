import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastreamProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsOperationsListPathParams;
    queryParams: DatastreamProjectsLocationsOperationsListQueryParams;
    security: DatastreamProjectsLocationsOperationsListSecurity;
}
export declare class DatastreamProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
