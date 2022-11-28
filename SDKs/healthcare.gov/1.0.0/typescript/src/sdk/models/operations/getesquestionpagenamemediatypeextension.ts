import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsQuestionPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetEsQuestionPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEsQuestionPageNameMediaTypeExtensionPathParams;
}


export class GetEsQuestionPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
