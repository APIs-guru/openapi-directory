import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcesMediaIdContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=calledByBuild" })
  calledByBuild?: boolean;
}


export class GetResourcesMediaIdContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaIdContentPathParams;

  @Metadata()
  queryParams: GetResourcesMediaIdContentQueryParams;
}


export class GetResourcesMediaIdContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesMediaIdContent200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
