import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadAtmsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadAtmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HeadAtmsHeaders;
}


export class HeadAtmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
