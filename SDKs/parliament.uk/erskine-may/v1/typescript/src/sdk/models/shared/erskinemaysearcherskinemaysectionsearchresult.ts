import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErskineMaySectionSearchResult } from "./erskinemaysectionsearchresult";



export class ErskineMaySearchErskineMaySectionSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=searchResults", elemType: ErskineMaySectionSearchResult })
  searchResults?: ErskineMaySectionSearchResult[];

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
