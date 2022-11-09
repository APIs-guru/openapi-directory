import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFilesUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isPrivate" })
  isPrivate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class PostFilesUrlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostFilesUrlQueryParams;
}


export class PostFilesUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
