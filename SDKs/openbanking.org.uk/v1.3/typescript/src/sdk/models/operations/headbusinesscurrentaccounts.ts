import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadBusinessCurrentAccountsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadBusinessCurrentAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HeadBusinessCurrentAccountsHeaders;
}


export class HeadBusinessCurrentAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
