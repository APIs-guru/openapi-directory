import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdRenderedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdRenderedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smooth" })
  smooth?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=window-center" })
  windowCenter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=window-width" })
  windowWidth?: number;
}


export class GetInstancesIdRenderedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdRenderedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdRenderedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdRenderedQueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdRenderedHeaders;
}


export class GetInstancesIdRenderedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
