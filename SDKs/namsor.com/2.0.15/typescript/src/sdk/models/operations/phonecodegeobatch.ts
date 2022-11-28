import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneCodeGeoBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeGeoBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNamePhoneNumberGeoIn;

  @SpeakeasyMetadata()
  security: PhoneCodeGeoBatchSecurity;
}


export class PhoneCodeGeoBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
