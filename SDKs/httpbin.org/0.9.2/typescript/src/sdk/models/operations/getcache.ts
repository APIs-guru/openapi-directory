import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCacheHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetCacheHeaders;
}


export class GetCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
