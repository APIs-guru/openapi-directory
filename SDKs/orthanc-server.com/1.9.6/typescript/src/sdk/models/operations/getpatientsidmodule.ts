import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetPatientsIdModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdModulePathParams;

  @Metadata()
  queryParams: GetPatientsIdModuleQueryParams;
}


export class GetPatientsIdModuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdModule200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
