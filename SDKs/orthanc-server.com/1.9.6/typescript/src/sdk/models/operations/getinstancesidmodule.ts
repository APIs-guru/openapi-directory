import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetInstancesIdModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdModulePathParams;

  @Metadata()
  queryParams: GetInstancesIdModuleQueryParams;
}


export class GetInstancesIdModuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdModule200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
