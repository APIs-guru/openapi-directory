import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetEsPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEsPageNameMediaTypeExtensionPathParams;
}


export class GetEsPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
