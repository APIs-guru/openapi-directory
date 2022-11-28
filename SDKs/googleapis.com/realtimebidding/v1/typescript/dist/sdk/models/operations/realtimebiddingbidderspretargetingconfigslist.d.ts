import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsListQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsListRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsListPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsListQueryParams;
    security: RealtimebiddingBiddersPretargetingConfigsListSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listPretargetingConfigsResponse?: shared.ListPretargetingConfigsResponse;
    statusCode: number;
}
