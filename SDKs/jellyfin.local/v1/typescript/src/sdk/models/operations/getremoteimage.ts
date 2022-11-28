import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRemoteImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageUrl" })
  imageUrl: string;
}


export class GetRemoteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoteImageQueryParams;
}


export class GetRemoteImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRemoteImage200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
