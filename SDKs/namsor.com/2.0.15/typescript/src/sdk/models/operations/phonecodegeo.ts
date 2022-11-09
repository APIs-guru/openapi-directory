import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhoneCodeGeoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" })
  phoneNumber: string;
}


export class PhoneCodeGeoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeGeoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PhoneCodeGeoPathParams;

  @Metadata()
  security: PhoneCodeGeoSecurity;
}


export class PhoneCodeGeoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;

  @Metadata()
  statusCode: number;
}
