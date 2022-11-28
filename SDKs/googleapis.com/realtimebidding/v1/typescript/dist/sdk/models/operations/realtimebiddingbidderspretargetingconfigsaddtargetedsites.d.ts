import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams extends SpeakeasyBase {
    pretargetingConfig: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams;
    request?: shared.AddTargetedSitesRequest;
    security: RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
