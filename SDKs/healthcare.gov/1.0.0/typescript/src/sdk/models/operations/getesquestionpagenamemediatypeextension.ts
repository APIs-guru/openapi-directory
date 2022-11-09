import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsQuestionPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetEsQuestionPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEsQuestionPageNameMediaTypeExtensionPathParams;
}


export class GetEsQuestionPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
