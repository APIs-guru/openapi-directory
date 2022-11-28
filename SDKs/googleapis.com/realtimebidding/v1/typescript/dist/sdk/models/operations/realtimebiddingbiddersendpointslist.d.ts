import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersEndpointsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersEndpointsListQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersEndpointsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersEndpointsListRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersEndpointsListPathParams;
    queryParams: RealtimebiddingBiddersEndpointsListQueryParams;
    security: RealtimebiddingBiddersEndpointsListSecurity;
}
export declare class RealtimebiddingBiddersEndpointsListResponse extends SpeakeasyBase {
    contentType: string;
    listEndpointsResponse?: shared.ListEndpointsResponse;
    statusCode: number;
}
