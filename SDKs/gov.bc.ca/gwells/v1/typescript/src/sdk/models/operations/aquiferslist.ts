import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquifersListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aquifer_id" })
  aquiferId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class AquifersListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquifersListQueryParams;
}


export class AquifersList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Aquifer })
  results: shared.Aquifer[];
}


export class AquifersListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquifersList200ApplicationJsonObject?: AquifersList200ApplicationJson;
}
