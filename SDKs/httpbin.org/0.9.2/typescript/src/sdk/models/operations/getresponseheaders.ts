import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResponseHeadersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class GetResponseHeadersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResponseHeadersQueryParams;
}


export class GetResponseHeadersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
