import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostResponseHeadersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class PostResponseHeadersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostResponseHeadersQueryParams;
}


export class PostResponseHeadersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
