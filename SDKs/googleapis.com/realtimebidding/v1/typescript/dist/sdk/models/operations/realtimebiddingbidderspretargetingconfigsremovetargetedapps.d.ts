import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsPathParams extends SpeakeasyBase {
    pretargetingConfig: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsQueryParams;
    request?: shared.RemoveTargetedAppsRequest;
    security: RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
