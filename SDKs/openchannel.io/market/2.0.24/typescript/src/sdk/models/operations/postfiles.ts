import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hash" })
  hash?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isPrivate" })
  isPrivate?: boolean;
}


export class PostFilesRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostFilesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: PostFilesRequestBodyFile;
}


export class PostFilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostFilesQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostFilesRequestBody;
}


export class PostFilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
