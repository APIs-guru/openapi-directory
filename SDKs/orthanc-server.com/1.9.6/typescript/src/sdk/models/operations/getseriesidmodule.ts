import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetSeriesIdModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdModulePathParams;

  @Metadata()
  queryParams: GetSeriesIdModuleQueryParams;
}


export class GetSeriesIdModuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdModule200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
