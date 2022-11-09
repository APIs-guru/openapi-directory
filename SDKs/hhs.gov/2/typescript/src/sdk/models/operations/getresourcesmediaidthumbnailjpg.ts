import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcesMediaIdThumbnailJpgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdThumbnailJpgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaIdThumbnailJpgPathParams;
}


export class GetResourcesMediaIdThumbnailJpgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesMediaIdThumbnailJpg200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
