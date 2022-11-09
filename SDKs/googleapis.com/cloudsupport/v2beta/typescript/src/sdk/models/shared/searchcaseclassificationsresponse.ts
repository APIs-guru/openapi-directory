import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaseClassification } from "./caseclassification";


// SearchCaseClassificationsResponse
/** 
 * The response message for SearchCaseClassifications endpoint.
**/
export class SearchCaseClassificationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseClassifications", elemType: shared.CaseClassification })
  caseClassifications?: CaseClassification[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
