import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TexttospeechTextSynthesizeQueryParams extends SpeakeasyBase {
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
export declare class TexttospeechTextSynthesizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TexttospeechTextSynthesizeRequest extends SpeakeasyBase {
    queryParams: TexttospeechTextSynthesizeQueryParams;
    request?: shared.SynthesizeSpeechRequest;
    security: TexttospeechTextSynthesizeSecurity;
}
export declare class TexttospeechTextSynthesizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    synthesizeSpeechResponse?: shared.SynthesizeSpeechResponse;
}
