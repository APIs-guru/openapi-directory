import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    internalRangeId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesCreateRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams;
    queryParams: NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams;
    request?: shared.InternalRangeInput;
    security: NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
