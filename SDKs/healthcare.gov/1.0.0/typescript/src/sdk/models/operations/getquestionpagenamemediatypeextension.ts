import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetQuestionPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetQuestionPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQuestionPageNameMediaTypeExtensionPathParams;
}


export class GetQuestionPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
