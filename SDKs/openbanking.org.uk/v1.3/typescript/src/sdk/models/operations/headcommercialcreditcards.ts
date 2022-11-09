import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadCommercialCreditCardsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadCommercialCreditCardsRequest extends SpeakeasyBase {
  @Metadata()
  headers: HeadCommercialCreditCardsHeaders;
}


export class HeadCommercialCreditCardsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
