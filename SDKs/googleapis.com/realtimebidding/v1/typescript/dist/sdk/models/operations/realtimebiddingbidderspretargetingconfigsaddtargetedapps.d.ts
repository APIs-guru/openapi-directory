import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams extends SpeakeasyBase {
    pretargetingConfig: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams;
    request?: shared.AddTargetedAppsRequest;
    security: RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
