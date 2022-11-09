import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPageNameMediaTypeExtensionPathParams;
}


export class GetPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
