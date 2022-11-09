import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendSmsMultiRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SmsRequest;
}


export class SendSmsMultiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  smsReponse?: shared.SmsReponse;

  @Metadata()
  statusCode: number;
}
