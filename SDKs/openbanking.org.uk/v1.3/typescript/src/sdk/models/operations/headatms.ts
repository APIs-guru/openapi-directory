import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadAtmsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadAtmsRequest extends SpeakeasyBase {
  @Metadata()
  headers: HeadAtmsHeaders;
}


export class HeadAtmsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
