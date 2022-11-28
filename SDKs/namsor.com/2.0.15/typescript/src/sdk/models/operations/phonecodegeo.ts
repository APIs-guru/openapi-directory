import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneCodeGeoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" })
  phoneNumber: string;
}


export class PhoneCodeGeoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeGeoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneCodeGeoPathParams;

  @SpeakeasyMetadata()
  security: PhoneCodeGeoSecurity;
}


export class PhoneCodeGeoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
