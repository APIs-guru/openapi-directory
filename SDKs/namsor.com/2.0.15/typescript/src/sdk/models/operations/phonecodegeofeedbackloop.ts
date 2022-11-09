import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhoneCodeGeoFeedbackLoopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" })
  phoneNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=phoneNumberE164" })
  phoneNumberE164: string;
}


export class PhoneCodeGeoFeedbackLoopSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeGeoFeedbackLoopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PhoneCodeGeoFeedbackLoopPathParams;

  @Metadata()
  security: PhoneCodeGeoFeedbackLoopSecurity;
}


export class PhoneCodeGeoFeedbackLoopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;

  @Metadata()
  statusCode: number;
}
