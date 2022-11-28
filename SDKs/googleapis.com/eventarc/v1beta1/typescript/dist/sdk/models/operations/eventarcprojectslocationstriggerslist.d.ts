import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsTriggersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsTriggersListQueryParams extends SpeakeasyBase {
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
export declare class EventarcProjectsLocationsTriggersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsTriggersListRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsTriggersListPathParams;
    queryParams: EventarcProjectsLocationsTriggersListQueryParams;
    security: EventarcProjectsLocationsTriggersListSecurity;
}
export declare class EventarcProjectsLocationsTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    listTriggersResponse?: shared.ListTriggersResponse;
    statusCode: number;
}
