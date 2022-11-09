import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhoneCodeBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNamePhoneNumberIn;

  @Metadata()
  security: PhoneCodeBatchSecurity;
}


export class PhoneCodeBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
