import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadPersonalCurrentAccountsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadPersonalCurrentAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HeadPersonalCurrentAccountsHeaders;
}


export class HeadPersonalCurrentAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
