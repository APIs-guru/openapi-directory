import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadPersonalCurrentAccountsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadPersonalCurrentAccountsRequest extends SpeakeasyBase {
  @Metadata()
  headers: HeadPersonalCurrentAccountsHeaders;
}


export class HeadPersonalCurrentAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
