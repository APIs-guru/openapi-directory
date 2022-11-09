import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETPAYMENTMETHODS_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
];



export class GetPaymentMethodsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetPaymentMethodsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetPaymentMethodsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPaymentMethodsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPaymentMethodsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPaymentMethodsSecurityOption2;
}


export class GetPaymentMethodsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetPaymentMethodsQueryParams;

  @Metadata()
  security: GetPaymentMethodsSecurity;
}


export class GetPaymentMethods200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PaymentMethod })
  data?: shared.PaymentMethod[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetPaymentMethodsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPaymentMethodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPaymentMethods200ApplicationJsonObject?: GetPaymentMethods200ApplicationJson;

  @Metadata()
  getPaymentMethodsDefaultApplicationJsonObject?: GetPaymentMethodsDefaultApplicationJson;
}
