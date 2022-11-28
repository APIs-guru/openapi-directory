import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCreditCardSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateCreditCardDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateCreditCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreditCard;

  @SpeakeasyMetadata()
  security: CreateCreditCardSecurity;
}


export class CreateCreditCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createCreditCard200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  createCreditCardDefaultApplicationJsonObject?: CreateCreditCardDefaultApplicationJson;
}
