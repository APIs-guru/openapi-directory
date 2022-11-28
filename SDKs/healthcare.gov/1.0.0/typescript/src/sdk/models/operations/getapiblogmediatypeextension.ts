import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApiBlogMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiBlogMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiBlogMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiBlogMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiBlogMediaTypeExtensionPathParams;
}


export class GetApiBlogMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
