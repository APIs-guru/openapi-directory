import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhoneCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" })
  phoneNumber: string;
}


export class PhoneCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PhoneCodePathParams;

  @Metadata()
  security: PhoneCodeSecurity;
}


export class PhoneCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;

  @Metadata()
  statusCode: number;
}
