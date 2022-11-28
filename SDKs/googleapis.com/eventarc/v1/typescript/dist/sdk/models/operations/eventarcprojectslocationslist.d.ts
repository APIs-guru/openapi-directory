import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class EventarcProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class EventarcProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsListPathParams;
    queryParams: EventarcProjectsLocationsListQueryParams;
    security: EventarcProjectsLocationsListSecurity;
}
export declare class EventarcProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
