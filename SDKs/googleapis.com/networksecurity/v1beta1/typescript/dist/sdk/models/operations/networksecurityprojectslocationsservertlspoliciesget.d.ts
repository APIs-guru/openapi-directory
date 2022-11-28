import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesGetQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesGetRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsServerTlsPoliciesGetPathParams;
    queryParams: NetworksecurityProjectsLocationsServerTlsPoliciesGetQueryParams;
    security: NetworksecurityProjectsLocationsServerTlsPoliciesGetSecurity;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse extends SpeakeasyBase {
    contentType: string;
    serverTlsPolicy?: shared.ServerTlsPolicy;
    statusCode: number;
}
