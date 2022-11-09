import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsChannelConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsChannelConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class EventarcProjectsLocationsChannelConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsChannelConnectionsListRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsChannelConnectionsListPathParams;
    queryParams: EventarcProjectsLocationsChannelConnectionsListQueryParams;
    security: EventarcProjectsLocationsChannelConnectionsListSecurity;
}
export declare class EventarcProjectsLocationsChannelConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listChannelConnectionsResponse?: shared.ListChannelConnectionsResponse;
    statusCode: number;
}
