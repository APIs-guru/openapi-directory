import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquifersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aquifer_id" })
  aquiferId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class AquifersList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Aquifer })
  results: shared.Aquifer[];
}


export class AquifersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquifersListQueryParams;
}


export class AquifersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquifersList200ApplicationJsonObject?: AquifersList200ApplicationJson;
}
