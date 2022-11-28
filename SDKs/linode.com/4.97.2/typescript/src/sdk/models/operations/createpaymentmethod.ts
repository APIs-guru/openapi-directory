import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreatePaymentMethodServerList = [
	"https://api.linode.com/v4",
] as const;


export class CreatePaymentMethodRequestBodyData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card_number" })
  cardNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=cvv" })
  cvv?: string;

  @SpeakeasyMetadata({ data: "json, name=expiry_month" })
  expiryMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=expiry_year" })
  expiryYear?: number;
}


// CreatePaymentMethodRequestBody
/** 
 * Payment Method Request Object.
**/
export class CreatePaymentMethodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreatePaymentMethodRequestBodyData;

  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: shared.TypeEnum;
}


export class CreatePaymentMethodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreatePaymentMethodDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePaymentMethodRequestBody;

  @SpeakeasyMetadata()
  security: CreatePaymentMethodSecurity;
}


export class CreatePaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPaymentMethod200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  createPaymentMethodDefaultApplicationJsonObject?: CreatePaymentMethodDefaultApplicationJson;
}
