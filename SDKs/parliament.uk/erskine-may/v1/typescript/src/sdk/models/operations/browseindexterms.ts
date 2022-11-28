import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BrowseIndexTermsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startLetter" })
  startLetter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class BrowseIndexTermsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BrowseIndexTermsQueryParams;
}


export class BrowseIndexTermsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySearchErskineMayIndexTermSearchResult?: shared.ErskineMaySearchErskineMayIndexTermSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
