import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum {
    DotJson = ".json"
}


export class GetBlogPageNameMediaTypeExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaTypeExtension" })
  mediaTypeExtension: GetBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageName" })
  pageName: string;
}


export class GetBlogPageNameMediaTypeExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBlogPageNameMediaTypeExtensionPathParams;
}


export class GetBlogPageNameMediaTypeExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
