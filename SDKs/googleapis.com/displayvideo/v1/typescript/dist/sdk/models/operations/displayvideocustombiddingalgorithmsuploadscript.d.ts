import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsUploadScriptPathParams extends SpeakeasyBase {
    customBiddingAlgorithmId: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsUploadScriptQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomBiddingAlgorithmsUploadScriptPathParams;
    queryParams: DisplayvideoCustomBiddingAlgorithmsUploadScriptQueryParams;
    security: DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse extends SpeakeasyBase {
    contentType: string;
    customBiddingScriptRef?: shared.CustomBiddingScriptRef;
    statusCode: number;
}
