import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsInternalRangesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesListRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsInternalRangesListPathParams;
    queryParams: NetworkconnectivityProjectsLocationsInternalRangesListQueryParams;
    security: NetworkconnectivityProjectsLocationsInternalRangesListSecurity;
}
export declare class NetworkconnectivityProjectsLocationsInternalRangesListResponse extends SpeakeasyBase {
    contentType: string;
    listInternalRangesResponse?: shared.ListInternalRangesResponse;
    statusCode: number;
}
