import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdSeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdSeriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetInstancesIdSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdSeriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdSeriesQueryParams;
}


export class GetInstancesIdSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInstancesIdSeries200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
