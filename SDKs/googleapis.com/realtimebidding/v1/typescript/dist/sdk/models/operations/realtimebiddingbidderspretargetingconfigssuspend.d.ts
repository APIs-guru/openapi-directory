import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsSuspendPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsSuspendQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsSuspendSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsSuspendRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsSuspendPathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsSuspendQueryParams;
    request?: Map<string, any>;
    security: RealtimebiddingBiddersPretargetingConfigsSuspendSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsSuspendResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
