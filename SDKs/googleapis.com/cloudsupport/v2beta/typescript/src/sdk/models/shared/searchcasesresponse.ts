import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Case } from "./case";



// SearchCasesResponse
/** 
 * The response message for the SearchCases endpoint.
**/
export class SearchCasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: Case })
  cases?: Case[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
