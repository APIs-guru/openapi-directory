import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPAYMENTMETHOD_SERVERS = [
	"https://api.linode.com/v4",
];



export class CreatePaymentMethodRequestBodyData extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_number" })
  cardNumber?: string;

  @Metadata({ data: "json, name=cvv" })
  cvv?: string;

  @Metadata({ data: "json, name=expiry_month" })
  expiryMonth?: number;

  @Metadata({ data: "json, name=expiry_year" })
  expiryYear?: number;
}


// CreatePaymentMethodRequestBody
/** 
 * Payment Method Request Object.
**/
export class CreatePaymentMethodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CreatePaymentMethodRequestBodyData;

  @Metadata({ data: "json, name=is_default" })
  isDefault: boolean;

  @Metadata({ data: "json, name=type" })
  type: shared.TypeEnum;
}


export class CreatePaymentMethodSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreatePaymentMethodSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreatePaymentMethodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreatePaymentMethodSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreatePaymentMethodSecurityOption2;
}


export class CreatePaymentMethodRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePaymentMethodRequestBody;

  @Metadata()
  security: CreatePaymentMethodSecurity;
}


export class CreatePaymentMethodDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePaymentMethodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPaymentMethod200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  createPaymentMethodDefaultApplicationJsonObject?: CreatePaymentMethodDefaultApplicationJson;
}
