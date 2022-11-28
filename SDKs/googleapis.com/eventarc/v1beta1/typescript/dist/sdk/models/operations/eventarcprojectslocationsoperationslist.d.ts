import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class EventarcProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class EventarcProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsOperationsListPathParams;
    queryParams: EventarcProjectsLocationsOperationsListQueryParams;
    security: EventarcProjectsLocationsOperationsListSecurity;
}
export declare class EventarcProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
