import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetStudiesIdModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdModulePathParams;

  @Metadata()
  queryParams: GetStudiesIdModuleQueryParams;
}


export class GetStudiesIdModuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdModule200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
