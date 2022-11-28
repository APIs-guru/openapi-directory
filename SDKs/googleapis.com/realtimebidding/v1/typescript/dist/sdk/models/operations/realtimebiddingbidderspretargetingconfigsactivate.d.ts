import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsActivateQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsActivateRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsActivatePathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsActivateQueryParams;
    request?: Map<string, any>;
    security: RealtimebiddingBiddersPretargetingConfigsActivateSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsActivateResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
