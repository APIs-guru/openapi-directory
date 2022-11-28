import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersPathParams extends SpeakeasyBase {
    pretargetingConfig: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersQueryParams;
    request?: shared.RemoveTargetedPublishersRequest;
    security: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
