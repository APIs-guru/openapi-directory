import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStateNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetStateNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetStateNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stateName" })
  stateName: string;
}


export class GetStateNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStateNameMediaTypeExtensionPathParams;
}


export class GetStateNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
