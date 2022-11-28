import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsStateNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsStateNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stateName" })
  stateName: string;
}


export class GetEsStateNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEsStateNameMediaTypeExtensionPathParams;
}


export class GetEsStateNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
