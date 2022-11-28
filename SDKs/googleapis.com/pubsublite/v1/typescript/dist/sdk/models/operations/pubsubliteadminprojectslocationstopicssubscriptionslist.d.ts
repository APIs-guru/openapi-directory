import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsTopicsSubscriptionsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsTopicsSubscriptionsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteAdminProjectsLocationsTopicsSubscriptionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsTopicsSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsTopicsSubscriptionsListPathParams;
    queryParams: PubsubliteAdminProjectsLocationsTopicsSubscriptionsListQueryParams;
    security: PubsubliteAdminProjectsLocationsTopicsSubscriptionsListSecurity;
}
export declare class PubsubliteAdminProjectsLocationsTopicsSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicSubscriptionsResponse?: shared.ListTopicSubscriptionsResponse;
    statusCode: number;
}
