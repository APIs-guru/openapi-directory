import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcesMediaIdEmbedJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdEmbedJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=divId" })
  divId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludeDiv" })
  excludeDiv?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludeJquery" })
  excludeJquery?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=flavor" })
  flavor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=iframeName" })
  iframeName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=width" })
  width?: number;
}


export class GetResourcesMediaIdEmbedJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaIdEmbedJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesMediaIdEmbedJsonQueryParams;
}


export class GetResourcesMediaIdEmbedJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourcesMediaIdEmbedJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
