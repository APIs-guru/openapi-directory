import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneCodeBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNamePhoneNumberIn;

  @SpeakeasyMetadata()
  security: PhoneCodeBatchSecurity;
}


export class PhoneCodeBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
