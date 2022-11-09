import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiKeyQuotasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ApiKeyQuotasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyQuotasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiKeyQuotasPathParams;

  @Metadata()
  security: ApiKeyQuotasSecurity;
}


export class ApiKeyQuotasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotas?: shared.Quotas;

  @Metadata()
  statusCode: number;
}
