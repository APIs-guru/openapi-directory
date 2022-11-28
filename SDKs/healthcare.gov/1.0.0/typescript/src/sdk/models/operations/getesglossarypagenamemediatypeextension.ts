import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsGlossaryPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetEsGlossaryPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEsGlossaryPageNameMediaTypeExtensionPathParams;
}


export class GetEsGlossaryPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
