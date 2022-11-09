import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetApiKeyFromGroupQuotasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ResetApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ResetApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetApiKeyFromGroupQuotasPathParams;

  @Metadata()
  security: ResetApiKeyFromGroupQuotasSecurity;
}


export class ResetApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotas?: shared.Quotas;

  @Metadata()
  statusCode: number;
}
