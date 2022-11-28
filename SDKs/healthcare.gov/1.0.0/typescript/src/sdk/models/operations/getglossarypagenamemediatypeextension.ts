import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetGlossaryPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetGlossaryPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGlossaryPageNameMediaTypeExtensionPathParams;
}


export class GetGlossaryPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
