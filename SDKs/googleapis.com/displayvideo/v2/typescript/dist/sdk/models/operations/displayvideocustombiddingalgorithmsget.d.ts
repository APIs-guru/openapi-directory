import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsGetPathParams extends SpeakeasyBase {
    customBiddingAlgorithmId: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomBiddingAlgorithmsGetPathParams;
    queryParams: DisplayvideoCustomBiddingAlgorithmsGetQueryParams;
    security: DisplayvideoCustomBiddingAlgorithmsGetSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsGetResponse extends SpeakeasyBase {
    contentType: string;
    customBiddingAlgorithm?: shared.CustomBiddingAlgorithm;
    statusCode: number;
}
