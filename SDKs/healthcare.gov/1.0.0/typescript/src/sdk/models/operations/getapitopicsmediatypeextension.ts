import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApiTopicsMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiTopicsMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiTopicsMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiTopicsMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiTopicsMediaTypeExtensionPathParams;
}


export class GetApiTopicsMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
