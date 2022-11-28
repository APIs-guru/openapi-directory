import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFilesUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPrivate" })
  isPrivate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class PostFilesUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostFilesUrlQueryParams;
}


export class PostFilesUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
