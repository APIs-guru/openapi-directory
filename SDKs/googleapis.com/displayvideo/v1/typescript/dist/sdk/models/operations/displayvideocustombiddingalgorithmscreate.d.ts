import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoCustomBiddingAlgorithmsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsCreateRequest extends SpeakeasyBase {
    queryParams: DisplayvideoCustomBiddingAlgorithmsCreateQueryParams;
    request?: shared.CustomBiddingAlgorithmInput;
    security: DisplayvideoCustomBiddingAlgorithmsCreateSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsCreateResponse extends SpeakeasyBase {
    contentType: string;
    customBiddingAlgorithm?: shared.CustomBiddingAlgorithm;
    statusCode: number;
}
