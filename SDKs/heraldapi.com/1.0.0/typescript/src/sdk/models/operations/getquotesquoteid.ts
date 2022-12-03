import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuotesQuoteIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=quote_id" })
  quoteId: string;
}


export class GetQuotesQuoteId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: shared.QuoteV1;
}


export class GetQuotesQuoteIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQuotesQuoteIdPathParams;
}


export class GetQuotesQuoteIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getQuotesQuoteId200ApplicationJsonObject?: GetQuotesQuoteId200ApplicationJson;
}
