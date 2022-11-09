import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBadgeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetBadgeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBadgeQueryParams;
}


export class GetBadgeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
