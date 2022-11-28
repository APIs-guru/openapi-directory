import { SpeakeasyBase } from "../../../internal/utils";
import { CaseClassification } from "./caseclassification";
/**
 * The response message for SearchCaseClassifications endpoint.
**/
export declare class SearchCaseClassificationsResponse extends SpeakeasyBase {
    caseClassifications?: CaseClassification[];
    nextPageToken?: string;
}
