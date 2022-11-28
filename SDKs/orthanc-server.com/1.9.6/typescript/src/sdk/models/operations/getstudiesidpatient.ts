import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdPatientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdPatientQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetStudiesIdPatientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdPatientPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStudiesIdPatientQueryParams;
}


export class GetStudiesIdPatientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStudiesIdPatient200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
