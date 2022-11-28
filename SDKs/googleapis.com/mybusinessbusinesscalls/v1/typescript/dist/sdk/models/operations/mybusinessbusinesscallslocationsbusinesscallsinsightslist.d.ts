import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams;
    queryParams: MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams;
}
export declare class MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse extends SpeakeasyBase {
    contentType: string;
    listBusinessCallsInsightsResponse?: shared.ListBusinessCallsInsightsResponse;
    statusCode: number;
}
