import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams extends SpeakeasyBase {
    pretargetingConfig: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesQueryParams;
    request?: shared.RemoveTargetedSitesRequest;
    security: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
