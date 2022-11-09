import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNewsArticlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetNewsArticlesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetNewsArticlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNewsArticlesPathParams;

  @Metadata()
  queryParams: GetNewsArticlesQueryParams;
}


export class GetNewsArticlesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  newsArticlesSummarySearchResult?: shared.NewsArticlesSummarySearchResult;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
