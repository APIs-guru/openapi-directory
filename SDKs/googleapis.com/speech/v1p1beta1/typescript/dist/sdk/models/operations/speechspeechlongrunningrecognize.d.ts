import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SpeechSpeechLongrunningrecognizeQueryParams extends SpeakeasyBase {
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
export declare class SpeechSpeechLongrunningrecognizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechSpeechLongrunningrecognizeRequest extends SpeakeasyBase {
    queryParams: SpeechSpeechLongrunningrecognizeQueryParams;
    request?: shared.LongRunningRecognizeRequest;
    security: SpeechSpeechLongrunningrecognizeSecurity;
}
export declare class SpeechSpeechLongrunningrecognizeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
