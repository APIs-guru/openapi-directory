import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdModuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetSeriesIdModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdModulePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSeriesIdModuleQueryParams;
}


export class GetSeriesIdModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSeriesIdModule200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
