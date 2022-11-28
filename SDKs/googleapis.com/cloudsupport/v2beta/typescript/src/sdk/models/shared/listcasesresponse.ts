import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Case } from "./case";



// ListCasesResponse
/** 
 * The response message for the ListCases endpoint.
**/
export class ListCasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases", elemType: Case })
  cases?: Case[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
