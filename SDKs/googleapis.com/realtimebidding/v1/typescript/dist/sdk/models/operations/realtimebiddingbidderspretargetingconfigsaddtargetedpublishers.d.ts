import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams extends SpeakeasyBase {
    pretargetingConfig: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams;
    request?: shared.AddTargetedPublishersRequest;
    security: RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
