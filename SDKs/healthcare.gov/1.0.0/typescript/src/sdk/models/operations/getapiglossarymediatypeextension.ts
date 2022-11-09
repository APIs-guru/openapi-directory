import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApiGlossaryMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiGlossaryMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiGlossaryMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiGlossaryMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiGlossaryMediaTypeExtensionPathParams;
}


export class GetApiGlossaryMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
