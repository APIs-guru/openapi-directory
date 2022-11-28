import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApiArticlesMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiArticlesMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiArticlesMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiArticlesMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiArticlesMediaTypeExtensionPathParams;
}


export class GetApiArticlesMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
