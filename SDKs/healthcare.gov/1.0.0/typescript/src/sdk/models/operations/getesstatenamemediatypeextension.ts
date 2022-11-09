import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsStateNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stateName" })
  stateName: string;
}


export class GetEsStateNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEsStateNameMediaTypeExtensionPathParams;
}


export class GetEsStateNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
