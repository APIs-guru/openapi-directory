import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostResponseHeadersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class PostResponseHeadersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostResponseHeadersQueryParams;
}


export class PostResponseHeadersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
