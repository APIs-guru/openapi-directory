import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErskineMaySectionSearchResult } from "./erskinemaysectionsearchresult";


export class ErskineMaySearchErskineMaySectionSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=searchResults", elemType: shared.ErskineMaySectionSearchResult })
  searchResults?: ErskineMaySectionSearchResult[];

  @Metadata({ data: "json, name=searchTerm" })
  searchTerm?: string;

  @Metadata({ data: "json, name=searchTerms" })
  searchTerms?: string[];

  @Metadata({ data: "json, name=skip" })
  skip?: number;

  @Metadata({ data: "json, name=suggestedSearch" })
  suggestedSearch?: string;

  @Metadata({ data: "json, name=take" })
  take?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
