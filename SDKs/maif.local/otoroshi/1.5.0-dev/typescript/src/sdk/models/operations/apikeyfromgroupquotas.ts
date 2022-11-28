import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeyFromGroupQuotasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeyFromGroupQuotasPathParams;

  @SpeakeasyMetadata()
  security: ApiKeyFromGroupQuotasSecurity;
}


export class ApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quotas?: shared.Quotas;

  @SpeakeasyMetadata()
  statusCode: number;
}
