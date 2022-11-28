import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";



// QueryContent
/** 
 * The query content.
**/
export class QueryContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iamPolicyAnalysisQuery" })
  iamPolicyAnalysisQuery?: IamPolicyAnalysisQuery;
}
