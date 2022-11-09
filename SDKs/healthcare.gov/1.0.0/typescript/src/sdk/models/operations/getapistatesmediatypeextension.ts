import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApiStatesMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiStatesMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiStatesMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiStatesMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiStatesMediaTypeExtensionPathParams;
}


export class GetApiStatesMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
