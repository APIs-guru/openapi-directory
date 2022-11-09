import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdRenderedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdRenderedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=smooth" })
  smooth?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=window-center" })
  windowCenter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=window-width" })
  windowWidth?: number;
}


export class GetInstancesIdRenderedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdRenderedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdRenderedPathParams;

  @Metadata()
  queryParams: GetInstancesIdRenderedQueryParams;

  @Metadata()
  headers: GetInstancesIdRenderedHeaders;
}


export class GetInstancesIdRenderedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
