import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersPretargetingConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersPretargetingConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersPretargetingConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersPretargetingConfigsCreateRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersPretargetingConfigsCreatePathParams;
    queryParams: RealtimebiddingBiddersPretargetingConfigsCreateQueryParams;
    request?: shared.PretargetingConfigInput;
    security: RealtimebiddingBiddersPretargetingConfigsCreateSecurity;
}
export declare class RealtimebiddingBiddersPretargetingConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
