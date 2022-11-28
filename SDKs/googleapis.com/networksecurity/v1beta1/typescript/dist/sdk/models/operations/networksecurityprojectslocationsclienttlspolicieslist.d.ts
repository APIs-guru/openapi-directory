import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsClientTlsPoliciesListPathParams;
    queryParams: NetworksecurityProjectsLocationsClientTlsPoliciesListQueryParams;
    security: NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listClientTlsPoliciesResponse?: shared.ListClientTlsPoliciesResponse;
    statusCode: number;
}
