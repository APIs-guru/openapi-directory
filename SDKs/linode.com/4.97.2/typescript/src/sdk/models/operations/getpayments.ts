import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetPaymentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetPaymentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPaymentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPaymentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPaymentsSecurityOption2;
}


export class GetPaymentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPaymentsQueryParams;

  @Metadata()
  security: GetPaymentsSecurity;
}


export class GetPayments200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Payment })
  data?: shared.Payment[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetPaymentsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPaymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPayments200ApplicationJsonObject?: GetPayments200ApplicationJson;

  @Metadata()
  getPaymentsDefaultApplicationJsonObject?: GetPaymentsDefaultApplicationJson;
}
