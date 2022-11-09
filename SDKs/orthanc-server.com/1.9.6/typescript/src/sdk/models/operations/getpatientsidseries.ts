import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdSeriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetPatientsIdSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdSeriesPathParams;

  @Metadata()
  queryParams: GetPatientsIdSeriesQueryParams;
}


export class GetPatientsIdSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdSeries200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
