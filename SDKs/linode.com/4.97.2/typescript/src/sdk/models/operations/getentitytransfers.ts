import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEntityTransfersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetEntityTransfersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetEntityTransfersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetEntityTransfersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetEntityTransfersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetEntityTransfersSecurityOption2;
}


export class GetEntityTransfersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEntityTransfersQueryParams;

  @Metadata()
  security: GetEntityTransfersSecurity;
}


export class GetEntityTransfers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.EntityTransfer })
  data?: shared.EntityTransfer[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetEntityTransfersDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetEntityTransfersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEntityTransfers200ApplicationJsonObject?: GetEntityTransfers200ApplicationJson;

  @Metadata()
  getEntityTransfersDefaultApplicationJsonObject?: GetEntityTransfersDefaultApplicationJson;
}
