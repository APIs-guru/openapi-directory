import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendSmsMultiRequest extends SpeakeasyBase {
    request: shared.SmsRequest;
}
export declare class SendSmsMultiResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    smsReponse?: shared.SmsReponse;
    statusCode: number;
}
