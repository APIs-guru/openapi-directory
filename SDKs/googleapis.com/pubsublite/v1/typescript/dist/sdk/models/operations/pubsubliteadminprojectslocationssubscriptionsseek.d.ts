import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsSubscriptionsSeekPathParams;
    queryParams: PubsubliteAdminProjectsLocationsSubscriptionsSeekQueryParams;
    request?: shared.SeekSubscriptionRequest;
    security: PubsubliteAdminProjectsLocationsSubscriptionsSeekSecurity;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
