import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams;
    queryParams: NetworksecurityProjectsLocationsAuthorizationPoliciesListQueryParams;
    security: NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity;
}
export declare class NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listAuthorizationPoliciesResponse?: shared.ListAuthorizationPoliciesResponse;
    statusCode: number;
}
