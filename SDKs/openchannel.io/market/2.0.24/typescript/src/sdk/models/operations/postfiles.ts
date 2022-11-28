import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPrivate" })
  isPrivate?: boolean;
}


export class PostFilesRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostFilesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PostFilesRequestBodyFile;
}


export class PostFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostFilesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostFilesRequestBody;
}


export class PostFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
