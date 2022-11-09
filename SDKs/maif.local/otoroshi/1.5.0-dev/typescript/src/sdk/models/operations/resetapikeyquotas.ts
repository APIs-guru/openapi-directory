import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetApiKeyQuotasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ResetApiKeyQuotasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ResetApiKeyQuotasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetApiKeyQuotasPathParams;

  @Metadata()
  security: ResetApiKeyQuotasSecurity;
}


export class ResetApiKeyQuotasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotas?: shared.Quotas;

  @Metadata()
  statusCode: number;
}
