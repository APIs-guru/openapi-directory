import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCacheHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetCacheRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCacheHeaders;
}


export class GetCacheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
