import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsProvidersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsProvidersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
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
export declare class EventarcProjectsLocationsProvidersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsProvidersListRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsProvidersListPathParams;
    queryParams: EventarcProjectsLocationsProvidersListQueryParams;
    security: EventarcProjectsLocationsProvidersListSecurity;
}
export declare class EventarcProjectsLocationsProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    listProvidersResponse?: shared.ListProvidersResponse;
    statusCode: number;
}
