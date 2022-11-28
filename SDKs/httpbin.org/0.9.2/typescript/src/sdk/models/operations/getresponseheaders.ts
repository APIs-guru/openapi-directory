import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResponseHeadersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class GetResponseHeadersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResponseHeadersQueryParams;
}


export class GetResponseHeadersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
