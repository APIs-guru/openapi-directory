import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApiTopicsMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiTopicsMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiTopicsMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiTopicsMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiTopicsMediaTypeExtensionPathParams;
}


export class GetApiTopicsMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
