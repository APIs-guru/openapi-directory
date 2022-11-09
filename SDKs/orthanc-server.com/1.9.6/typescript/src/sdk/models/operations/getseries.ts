import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetSeriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSeriesQueryParams;
}


export class GetSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeries200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
