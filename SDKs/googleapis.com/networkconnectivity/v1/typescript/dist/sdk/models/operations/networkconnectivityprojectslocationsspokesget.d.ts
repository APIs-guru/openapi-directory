import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsSpokesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesGetQueryParams extends SpeakeasyBase {
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
export declare class NetworkconnectivityProjectsLocationsSpokesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsSpokesGetRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsSpokesGetPathParams;
    queryParams: NetworkconnectivityProjectsLocationsSpokesGetQueryParams;
    security: NetworkconnectivityProjectsLocationsSpokesGetSecurity;
}
export declare class NetworkconnectivityProjectsLocationsSpokesGetResponse extends SpeakeasyBase {
    contentType: string;
    spoke?: shared.Spoke;
    statusCode: number;
}
