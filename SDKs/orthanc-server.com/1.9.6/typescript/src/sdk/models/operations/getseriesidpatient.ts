import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdPatientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdPatientQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetSeriesIdPatientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdPatientPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSeriesIdPatientQueryParams;
}


export class GetSeriesIdPatientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSeriesIdPatient200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
