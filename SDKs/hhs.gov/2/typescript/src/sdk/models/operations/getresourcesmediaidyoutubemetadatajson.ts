import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesMediaIdYoutubeMetaDataJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: Map<string, any>[];
}


export class GetResourcesMediaIdYoutubeMetaDataJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaIdYoutubeMetaDataJsonPathParams;
}


export class GetResourcesMediaIdYoutubeMetaDataJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourcesMediaIdYoutubeMetaDataJson200ApplicationJsonObject?: GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
