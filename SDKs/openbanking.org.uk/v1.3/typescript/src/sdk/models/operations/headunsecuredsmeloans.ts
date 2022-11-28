import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadUnsecuredSmeLoansHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadUnsecuredSmeLoansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HeadUnsecuredSmeLoansHeaders;
}


export class HeadUnsecuredSmeLoansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
