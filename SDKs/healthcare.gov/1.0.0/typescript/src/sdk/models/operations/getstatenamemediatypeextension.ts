import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStateNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetStateNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetStateNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stateName" })
  stateName: string;
}


export class GetStateNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStateNameMediaTypeExtensionPathParams;
}


export class GetStateNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
