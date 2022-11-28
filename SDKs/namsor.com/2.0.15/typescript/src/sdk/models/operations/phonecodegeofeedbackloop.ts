import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneCodeGeoFeedbackLoopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumberE164" })
  phoneNumberE164: string;
}


export class PhoneCodeGeoFeedbackLoopSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeGeoFeedbackLoopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneCodeGeoFeedbackLoopPathParams;

  @SpeakeasyMetadata()
  security: PhoneCodeGeoFeedbackLoopSecurity;
}


export class PhoneCodeGeoFeedbackLoopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
