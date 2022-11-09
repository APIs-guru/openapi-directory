import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdPatientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdPatientQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetStudiesIdPatientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdPatientPathParams;

  @Metadata()
  queryParams: GetStudiesIdPatientQueryParams;
}


export class GetStudiesIdPatientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdPatient200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
