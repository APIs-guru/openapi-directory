import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadUnsecuredSmeLoansHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadUnsecuredSmeLoansRequest extends SpeakeasyBase {
  @Metadata()
  headers: HeadUnsecuredSmeLoansHeaders;
}


export class HeadUnsecuredSmeLoansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
