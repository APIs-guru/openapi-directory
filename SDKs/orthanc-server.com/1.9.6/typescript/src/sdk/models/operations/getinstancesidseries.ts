import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetInstancesIdSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdSeriesPathParams;

  @Metadata()
  queryParams: GetInstancesIdSeriesQueryParams;
}


export class GetInstancesIdSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdSeries200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
