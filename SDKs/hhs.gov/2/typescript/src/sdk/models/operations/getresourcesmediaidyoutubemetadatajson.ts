import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaIdYoutubeMetaDataJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesMediaIdYoutubeMetaDataJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaIdYoutubeMetaDataJsonPathParams;
}


export class GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback" })
  callback?: string;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @Metadata({ data: "json, name=results" })
  results?: Map<string, any>[];
}


export class GetResourcesMediaIdYoutubeMetaDataJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesMediaIdYoutubeMetaDataJson200ApplicationJsonObject?: GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
