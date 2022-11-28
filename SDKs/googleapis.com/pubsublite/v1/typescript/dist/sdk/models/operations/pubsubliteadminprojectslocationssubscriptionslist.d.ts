import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsSubscriptionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteAdminProjectsLocationsSubscriptionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsSubscriptionsListPathParams;
    queryParams: PubsubliteAdminProjectsLocationsSubscriptionsListQueryParams;
    security: PubsubliteAdminProjectsLocationsSubscriptionsListSecurity;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionsResponse?: shared.ListSubscriptionsResponse;
    statusCode: number;
}
