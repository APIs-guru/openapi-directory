import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpeechSpeechRecognizeQueryParams extends SpeakeasyBase {
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
export declare class SpeechSpeechRecognizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechSpeechRecognizeRequest extends SpeakeasyBase {
    queryParams: SpeechSpeechRecognizeQueryParams;
    request?: shared.RecognizeRequestInput;
    security: SpeechSpeechRecognizeSecurity;
}
export declare class SpeechSpeechRecognizeResponse extends SpeakeasyBase {
    contentType: string;
    recognizeResponse?: shared.RecognizeResponse;
    statusCode: number;
}
