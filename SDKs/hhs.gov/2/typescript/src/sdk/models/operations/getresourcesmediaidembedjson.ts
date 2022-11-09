import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcesMediaIdEmbedJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdEmbedJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=divId" })
  divId?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=excludeDiv" })
  excludeDiv?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=excludeJquery" })
  excludeJquery?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=flavor" })
  flavor?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=iframeName" })
  iframeName?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=width" })
  width?: number;
}


export class GetResourcesMediaIdEmbedJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaIdEmbedJsonPathParams;

  @Metadata()
  queryParams: GetResourcesMediaIdEmbedJsonQueryParams;
}


export class GetResourcesMediaIdEmbedJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesMediaIdEmbedJson200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
