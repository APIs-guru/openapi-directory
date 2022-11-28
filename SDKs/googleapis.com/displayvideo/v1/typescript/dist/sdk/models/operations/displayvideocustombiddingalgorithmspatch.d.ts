import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsPatchPathParams extends SpeakeasyBase {
    customBiddingAlgorithmId: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomBiddingAlgorithmsPatchPathParams;
    queryParams: DisplayvideoCustomBiddingAlgorithmsPatchQueryParams;
    request?: shared.CustomBiddingAlgorithmInput;
    security: DisplayvideoCustomBiddingAlgorithmsPatchSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsPatchResponse extends SpeakeasyBase {
    contentType: string;
    customBiddingAlgorithm?: shared.CustomBiddingAlgorithm;
    statusCode: number;
}
