import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesListRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams;
    queryParams: NetworksecurityProjectsLocationsServerTlsPoliciesListQueryParams;
    security: NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listServerTlsPoliciesResponse?: shared.ListServerTlsPoliciesResponse;
    statusCode: number;
}
