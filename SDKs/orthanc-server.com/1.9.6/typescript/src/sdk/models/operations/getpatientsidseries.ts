import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdSeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdSeriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetPatientsIdSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdSeriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPatientsIdSeriesQueryParams;
}


export class GetPatientsIdSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPatientsIdSeries200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
