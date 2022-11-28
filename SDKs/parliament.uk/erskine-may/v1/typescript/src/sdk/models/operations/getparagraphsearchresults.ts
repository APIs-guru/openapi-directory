import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParagraphSearchResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;
}


export class GetParagraphSearchResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetParagraphSearchResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetParagraphSearchResultsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetParagraphSearchResultsQueryParams;
}


export class GetParagraphSearchResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySearchErskineMayParagraphSearchResult?: shared.ErskineMaySearchErskineMayParagraphSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
