import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsSpokesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesCreateQueryParams extends SpeakeasyBase {
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
    spokeId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsSpokesCreateRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsSpokesCreatePathParams;
    queryParams: NetworkconnectivityProjectsLocationsSpokesCreateQueryParams;
    request?: shared.SpokeInput;
    security: NetworkconnectivityProjectsLocationsSpokesCreateSecurity;
}
export declare class NetworkconnectivityProjectsLocationsSpokesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
