import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApiBlogMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetApiBlogMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetApiBlogMediaTypeExtensionMediaTypeExtensionEnum;
}


export class GetApiBlogMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiBlogMediaTypeExtensionPathParams;
}


export class GetApiBlogMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
