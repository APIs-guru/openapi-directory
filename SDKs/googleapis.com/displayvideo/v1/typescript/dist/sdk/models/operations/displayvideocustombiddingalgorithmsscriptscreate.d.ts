import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams extends SpeakeasyBase {
    customBiddingAlgorithmId: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams;
    queryParams: DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams;
    request?: shared.CustomBiddingScriptInput;
    security: DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse extends SpeakeasyBase {
    contentType: string;
    customBiddingScript?: shared.CustomBiddingScript;
    statusCode: number;
}
