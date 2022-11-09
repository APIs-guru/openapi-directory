import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Case } from "./case";


// ListCasesResponse
/** 
 * The response message for the ListCases endpoint.
**/
export class ListCasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cases", elemType: shared.Case })
  cases?: Case[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
