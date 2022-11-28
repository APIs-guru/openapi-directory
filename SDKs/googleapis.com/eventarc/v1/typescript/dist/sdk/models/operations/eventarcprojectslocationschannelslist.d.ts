import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsChannelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsChannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class EventarcProjectsLocationsChannelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsChannelsListRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsChannelsListPathParams;
    queryParams: EventarcProjectsLocationsChannelsListQueryParams;
    security: EventarcProjectsLocationsChannelsListSecurity;
}
export declare class EventarcProjectsLocationsChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
}
