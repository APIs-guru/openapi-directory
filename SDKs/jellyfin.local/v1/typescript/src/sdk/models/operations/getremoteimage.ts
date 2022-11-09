import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRemoteImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imageUrl" })
  imageUrl: string;
}


export class GetRemoteImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoteImageQueryParams;
}


export class GetRemoteImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getRemoteImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
