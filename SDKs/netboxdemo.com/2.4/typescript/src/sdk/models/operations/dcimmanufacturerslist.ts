import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimManufacturersListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class DcimManufacturersListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimManufacturersListQueryParams;
}


export class DcimManufacturersList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Manufacturer })
  results: shared.Manufacturer[];
}


export class DcimManufacturersListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimManufacturersList200ApplicationJsonObject?: DcimManufacturersList200ApplicationJson;
}
