import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindAllClientValidatorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllClientValidatorsRequest extends SpeakeasyBase {
  @Metadata()
  security: FindAllClientValidatorsSecurity;
}


export class FindAllClientValidatorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ValidationAuthority })
  validationAuthorities?: shared.ValidationAuthority[];
}
