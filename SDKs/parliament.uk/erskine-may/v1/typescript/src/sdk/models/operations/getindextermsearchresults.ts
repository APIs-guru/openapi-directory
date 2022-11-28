import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIndexTermSearchResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;
}


export class GetIndexTermSearchResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetIndexTermSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIndexTermSearchResultsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIndexTermSearchResultsQueryParams;
}


export class GetIndexTermSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySearchErskineMayIndexTermSearchResult?: shared.ErskineMaySearchErskineMayIndexTermSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
