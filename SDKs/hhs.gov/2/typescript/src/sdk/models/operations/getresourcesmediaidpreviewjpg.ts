import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcesMediaIdPreviewJpgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdPreviewJpgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaIdPreviewJpgPathParams;
}


export class GetResourcesMediaIdPreviewJpgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourcesMediaIdPreviewJpg200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
