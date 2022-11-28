import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest extends SpeakeasyBase {
    pathParams: PubsubliteCursorProjectsLocationsSubscriptionsCursorsListPathParams;
    queryParams: PubsubliteCursorProjectsLocationsSubscriptionsCursorsListQueryParams;
    security: PubsubliteCursorProjectsLocationsSubscriptionsCursorsListSecurity;
}
export declare class PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse extends SpeakeasyBase {
    contentType: string;
    listPartitionCursorsResponse?: shared.ListPartitionCursorsResponse;
    statusCode: number;
}
