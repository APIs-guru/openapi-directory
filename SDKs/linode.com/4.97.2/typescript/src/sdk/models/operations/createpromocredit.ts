import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePromoCreditRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=promo_code" })
  promoCode: string;
}


export class CreatePromoCreditSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreatePromoCreditDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePromoCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreatePromoCreditRequestBody;

  @SpeakeasyMetadata()
  security: CreatePromoCreditSecurity;
}


export class CreatePromoCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  promotion?: shared.Promotion;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPromoCreditDefaultApplicationJsonObject?: CreatePromoCreditDefaultApplicationJson;
}
