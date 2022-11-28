import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadCommercialCreditCardsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadCommercialCreditCardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HeadCommercialCreditCardsHeaders;
}


export class HeadCommercialCreditCardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
