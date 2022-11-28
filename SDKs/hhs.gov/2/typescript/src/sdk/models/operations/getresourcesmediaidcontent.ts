import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcesMediaIdContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=calledByBuild" })
  calledByBuild?: boolean;
}


export class GetResourcesMediaIdContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaIdContentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesMediaIdContentQueryParams;
}


export class GetResourcesMediaIdContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourcesMediaIdContent200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
