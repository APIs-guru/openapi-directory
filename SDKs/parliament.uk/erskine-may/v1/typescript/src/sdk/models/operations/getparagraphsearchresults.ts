import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParagraphSearchResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;
}


export class GetParagraphSearchResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetParagraphSearchResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetParagraphSearchResultsPathParams;

  @Metadata()
  queryParams: GetParagraphSearchResultsQueryParams;
}


export class GetParagraphSearchResultsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySearchErskineMayParagraphSearchResult?: shared.ErskineMaySearchErskineMayParagraphSearchResult;

  @Metadata()
  statusCode: number;
}
