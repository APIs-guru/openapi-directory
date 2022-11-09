import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_range" })
  dateRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=elevation" })
  elevation?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sw" })
  sw?: string;
}


export class GetQueryJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryJsonQueryParams;
}


export class GetQueryJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.Event })
  results?: shared.Event[];
}


export class GetQueryJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueryJson200ApplicationJsonObject?: GetQueryJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
