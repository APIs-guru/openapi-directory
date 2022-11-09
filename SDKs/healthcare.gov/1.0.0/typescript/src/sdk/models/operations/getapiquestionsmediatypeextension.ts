import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiQuestionsMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiQuestionsMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiQuestionsMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiQuestionsMediaTypeExtensionPathParams;
}


export class GetApiQuestionsMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
