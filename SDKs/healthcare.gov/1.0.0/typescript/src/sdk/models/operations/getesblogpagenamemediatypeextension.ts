import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetEsBlogPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetEsBlogPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEsBlogPageNameMediaTypeExtensionPathParams;
}


export class GetEsBlogPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
