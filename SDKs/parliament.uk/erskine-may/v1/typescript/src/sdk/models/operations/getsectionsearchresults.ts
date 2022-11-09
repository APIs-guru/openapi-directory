import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionSearchResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;
}


export class GetSectionSearchResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetSectionSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionSearchResultsPathParams;

  @Metadata()
  queryParams: GetSectionSearchResultsQueryParams;
}


export class GetSectionSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySearchErskineMaySectionSearchResult?: shared.ErskineMaySearchErskineMaySectionSearchResult;

  @Metadata()
  statusCode: number;
}
