import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhoneCodeGeoBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeGeoBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNamePhoneNumberGeoIn;

  @Metadata()
  security: PhoneCodeGeoBatchSecurity;
}


export class PhoneCodeGeoBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
