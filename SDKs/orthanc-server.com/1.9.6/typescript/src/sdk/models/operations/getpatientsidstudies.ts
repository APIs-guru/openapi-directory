import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdStudiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdStudiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetPatientsIdStudiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdStudiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPatientsIdStudiesQueryParams;
}


export class GetPatientsIdStudiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPatientsIdStudies200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
