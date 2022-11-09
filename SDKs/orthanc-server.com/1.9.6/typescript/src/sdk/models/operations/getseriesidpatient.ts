import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdPatientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdPatientQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetSeriesIdPatientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdPatientPathParams;

  @Metadata()
  queryParams: GetSeriesIdPatientQueryParams;
}


export class GetSeriesIdPatientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdPatient200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
