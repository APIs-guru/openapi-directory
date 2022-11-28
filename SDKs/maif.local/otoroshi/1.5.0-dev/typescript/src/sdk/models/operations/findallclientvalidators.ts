import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindAllClientValidatorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllClientValidatorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FindAllClientValidatorsSecurity;
}


export class FindAllClientValidatorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ValidationAuthority })
  validationAuthorities?: shared.ValidationAuthority[];
}
