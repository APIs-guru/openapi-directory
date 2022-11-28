import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiQuestionsMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiQuestionsMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiQuestionsMediaTypeExtensionPathParams;
}


export class GetApiQuestionsMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
