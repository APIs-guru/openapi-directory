import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcesMediaIdPreviewJpgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdPreviewJpgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaIdPreviewJpgPathParams;
}


export class GetResourcesMediaIdPreviewJpgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesMediaIdPreviewJpg200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
