import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBadgeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetBadgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBadgeQueryParams;
}


export class GetBadgeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
