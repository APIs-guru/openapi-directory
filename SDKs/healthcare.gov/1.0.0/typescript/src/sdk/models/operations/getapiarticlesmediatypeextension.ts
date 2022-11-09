import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApiArticlesMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiArticlesMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiArticlesMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiArticlesMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiArticlesMediaTypeExtensionPathParams;
}


export class GetApiArticlesMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
