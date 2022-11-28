import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcesMediaIdThumbnailJpgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdThumbnailJpgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaIdThumbnailJpgPathParams;
}


export class GetResourcesMediaIdThumbnailJpgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourcesMediaIdThumbnailJpg200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
