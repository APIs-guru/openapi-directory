import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsSpokesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsSpokesDeleteRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsSpokesDeletePathParams;
    queryParams: NetworkconnectivityProjectsLocationsSpokesDeleteQueryParams;
    security: NetworkconnectivityProjectsLocationsSpokesDeleteSecurity;
}
export declare class NetworkconnectivityProjectsLocationsSpokesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
