import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams extends SpeakeasyBase {
    customBiddingAlgorithmId: string;
    customBiddingScriptId: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams;
    queryParams: DisplayvideoCustomBiddingAlgorithmsScriptsGetQueryParams;
    security: DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse extends SpeakeasyBase {
    contentType: string;
    customBiddingScript?: shared.CustomBiddingScript;
    statusCode: number;
}
