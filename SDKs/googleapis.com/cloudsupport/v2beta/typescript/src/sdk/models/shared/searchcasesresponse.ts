import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Case } from "./case";


// SearchCasesResponse
/** 
 * The response message for the SearchCases endpoint.
**/
export class SearchCasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cases", elemType: shared.Case })
  cases?: Case[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
