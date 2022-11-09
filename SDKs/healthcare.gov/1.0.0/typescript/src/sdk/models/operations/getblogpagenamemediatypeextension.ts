import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetBlogPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetBlogPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBlogPageNameMediaTypeExtensionPathParams;
}


export class GetBlogPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
