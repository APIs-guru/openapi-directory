import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCreditCardSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateCreditCardSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateCreditCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateCreditCardSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateCreditCardSecurityOption2;
}


export class CreateCreditCardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreditCard;

  @Metadata()
  security: CreateCreditCardSecurity;
}


export class CreateCreditCardDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateCreditCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createCreditCard200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  createCreditCardDefaultApplicationJsonObject?: CreateCreditCardDefaultApplicationJson;
}
