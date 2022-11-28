import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendSmsRequest extends SpeakeasyBase {
    request: shared.SmsUniqueRequest;
}
export declare class SendSmsResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    smsReponse?: shared.SmsReponse;
    statusCode: number;
}
