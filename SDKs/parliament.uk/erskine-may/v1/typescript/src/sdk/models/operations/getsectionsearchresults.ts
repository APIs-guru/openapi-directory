import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSectionSearchResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;
}


export class GetSectionSearchResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetSectionSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSectionSearchResultsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSectionSearchResultsQueryParams;
}


export class GetSectionSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySearchErskineMaySectionSearchResult?: shared.ErskineMaySearchErskineMaySectionSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
