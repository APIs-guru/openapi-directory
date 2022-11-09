import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdModulePatientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdModulePatientQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetStudiesIdModulePatientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdModulePatientPathParams;

  @Metadata()
  queryParams: GetStudiesIdModulePatientQueryParams;
}


export class GetStudiesIdModulePatientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdModulePatient200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
