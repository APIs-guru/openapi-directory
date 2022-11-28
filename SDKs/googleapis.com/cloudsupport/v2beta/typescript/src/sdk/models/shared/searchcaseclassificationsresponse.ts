import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaseClassification } from "./caseclassification";



// SearchCaseClassificationsResponse
/** 
 * The response message for SearchCaseClassifications endpoint.
**/
export class SearchCaseClassificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseClassifications", elemType: CaseClassification })
  caseClassifications?: CaseClassification[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
