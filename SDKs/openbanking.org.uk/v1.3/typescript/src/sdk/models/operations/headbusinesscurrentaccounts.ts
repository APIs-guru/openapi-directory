import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadBusinessCurrentAccountsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadBusinessCurrentAccountsRequest extends SpeakeasyBase {
  @Metadata()
  headers: HeadBusinessCurrentAccountsHeaders;
}


export class HeadBusinessCurrentAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
