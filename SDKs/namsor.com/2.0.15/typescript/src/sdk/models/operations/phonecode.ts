import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" })
  phoneNumber: string;
}


export class PhoneCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PhoneCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneCodePathParams;

  @SpeakeasyMetadata()
  security: PhoneCodeSecurity;
}


export class PhoneCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNamePhoneCodedOut?: shared.FirstLastNamePhoneCodedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
