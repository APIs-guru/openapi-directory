import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeyQuotasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ApiKeyQuotasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyQuotasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeyQuotasPathParams;

  @SpeakeasyMetadata()
  security: ApiKeyQuotasSecurity;
}


export class ApiKeyQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quotas?: shared.Quotas;

  @SpeakeasyMetadata()
  statusCode: number;
}
