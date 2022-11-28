import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApiStatesMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiStatesMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiStatesMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiStatesMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiStatesMediaTypeExtensionPathParams;
}


export class GetApiStatesMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
