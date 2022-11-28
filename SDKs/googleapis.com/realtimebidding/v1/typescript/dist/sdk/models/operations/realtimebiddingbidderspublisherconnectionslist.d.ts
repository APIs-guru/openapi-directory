import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPublisherConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersPublisherConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPublisherConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPublisherConnectionsListRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPublisherConnectionsListPathParams;
    queryParams: RealtimebiddingBiddersPublisherConnectionsListQueryParams;
    security: RealtimebiddingBiddersPublisherConnectionsListSecurity;
}
export declare class RealtimebiddingBiddersPublisherConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listPublisherConnectionsResponse?: shared.ListPublisherConnectionsResponse;
    statusCode: number;
}
