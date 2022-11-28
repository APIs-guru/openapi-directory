import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    skipBacklog?: boolean;
    subscriptionId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsSubscriptionsCreatePathParams;
    queryParams: PubsubliteAdminProjectsLocationsSubscriptionsCreateQueryParams;
    request?: shared.Subscription;
    security: PubsubliteAdminProjectsLocationsSubscriptionsCreateSecurity;
}
export declare class PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
