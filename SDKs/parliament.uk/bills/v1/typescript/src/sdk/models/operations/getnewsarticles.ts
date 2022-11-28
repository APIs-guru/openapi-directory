import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNewsArticlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetNewsArticlesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetNewsArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNewsArticlesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNewsArticlesQueryParams;
}


export class GetNewsArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  newsArticlesSummarySearchResult?: shared.NewsArticlesSummarySearchResult;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
