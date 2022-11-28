import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams;
    queryParams: RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams;
    request?: shared.BatchRejectPublisherConnectionsRequest;
    security: RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity;
}
export declare class RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse extends SpeakeasyBase {
    batchRejectPublisherConnectionsResponse?: shared.BatchRejectPublisherConnectionsResponse;
    contentType: string;
    statusCode: number;
}
