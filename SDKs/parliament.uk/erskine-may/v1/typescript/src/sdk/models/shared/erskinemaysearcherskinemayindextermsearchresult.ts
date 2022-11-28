import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayIndexTermSearchResult } from "./erskinemayindextermsearchresult";



export class ErskineMaySearchErskineMayIndexTermSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=searchResults", elemType: ErskineMayIndexTermSearchResult })
  searchResults?: ErskineMayIndexTermSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=searchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTerms" })
  searchTerms?: string[];

  @SpeakeasyMetadata({ data: "json, name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "json, name=suggestedSearch" })
  suggestedSearch?: string;

  @SpeakeasyMetadata({ data: "json, name=take" })
  take?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
