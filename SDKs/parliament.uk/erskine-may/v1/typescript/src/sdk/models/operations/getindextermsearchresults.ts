import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIndexTermSearchResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;
}


export class GetIndexTermSearchResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetIndexTermSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIndexTermSearchResultsPathParams;

  @Metadata()
  queryParams: GetIndexTermSearchResultsQueryParams;
}


export class GetIndexTermSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySearchErskineMayIndexTermSearchResult?: shared.ErskineMaySearchErskineMayIndexTermSearchResult;

  @Metadata()
  statusCode: number;
}
