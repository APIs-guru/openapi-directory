import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams extends SpeakeasyBase {
    project: string;
}
export declare class GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams extends SpeakeasyBase {
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
export declare class GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams;
    queryParams: GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams;
    request?: Map<string, any>;
    security: GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
}
export declare class GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse extends SpeakeasyBase {
    contentType: string;
    initializeHubResponse?: shared.InitializeHubResponse;
    statusCode: number;
}
