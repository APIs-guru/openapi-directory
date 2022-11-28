import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetApiKeyFromGroupQuotasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ResetApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ResetApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetApiKeyFromGroupQuotasPathParams;

  @SpeakeasyMetadata()
  security: ResetApiKeyFromGroupQuotasSecurity;
}


export class ResetApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quotas?: shared.Quotas;

  @SpeakeasyMetadata()
  statusCode: number;
}
