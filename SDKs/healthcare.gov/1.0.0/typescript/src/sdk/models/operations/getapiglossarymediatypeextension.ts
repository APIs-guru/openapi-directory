import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApiGlossaryMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiGlossaryMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiGlossaryMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiGlossaryMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiGlossaryMediaTypeExtensionPathParams;
}


export class GetApiGlossaryMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
