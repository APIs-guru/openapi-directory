import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiKeyFromGroupQuotasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ApiKeyFromGroupQuotasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyFromGroupQuotasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiKeyFromGroupQuotasPathParams;

  @Metadata()
  security: ApiKeyFromGroupQuotasSecurity;
}


export class ApiKeyFromGroupQuotasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotas?: shared.Quotas;

  @Metadata()
  statusCode: number;
}
