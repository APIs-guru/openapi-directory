import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetApiKeyQuotasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ResetApiKeyQuotasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ResetApiKeyQuotasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetApiKeyQuotasPathParams;

  @SpeakeasyMetadata()
  security: ResetApiKeyQuotasSecurity;
}


export class ResetApiKeyQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quotas?: shared.Quotas;

  @SpeakeasyMetadata()
  statusCode: number;
}
