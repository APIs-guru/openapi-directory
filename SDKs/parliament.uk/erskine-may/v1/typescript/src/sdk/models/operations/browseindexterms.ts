import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BrowseIndexTermsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startLetter" })
  startLetter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class BrowseIndexTermsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BrowseIndexTermsQueryParams;
}


export class BrowseIndexTermsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySearchErskineMayIndexTermSearchResult?: shared.ErskineMaySearchErskineMayIndexTermSearchResult;

  @Metadata()
  statusCode: number;
}
