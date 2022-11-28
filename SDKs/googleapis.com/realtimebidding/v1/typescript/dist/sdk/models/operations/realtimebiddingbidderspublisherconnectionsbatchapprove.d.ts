import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersPublisherConnectionsBatchApproveQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams;
    queryParams: RealtimebiddingBiddersPublisherConnectionsBatchApproveQueryParams;
    request?: shared.BatchApprovePublisherConnectionsRequest;
    security: RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity;
}
export declare class RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse extends SpeakeasyBase {
    batchApprovePublisherConnectionsResponse?: shared.BatchApprovePublisherConnectionsResponse;
    contentType: string;
    statusCode: number;
}
