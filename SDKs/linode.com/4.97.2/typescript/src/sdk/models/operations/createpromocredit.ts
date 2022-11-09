import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePromoCreditRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=promo_code" })
  promoCode: string;
}


export class CreatePromoCreditSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreatePromoCreditSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreatePromoCreditSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreatePromoCreditSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreatePromoCreditSecurityOption2;
}


export class CreatePromoCreditRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreatePromoCreditRequestBody;

  @Metadata()
  security: CreatePromoCreditSecurity;
}


export class CreatePromoCreditDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePromoCreditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  promotion?: shared.Promotion;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPromoCreditDefaultApplicationJsonObject?: CreatePromoCreditDefaultApplicationJson;
}
