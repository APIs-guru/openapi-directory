import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";


// QueryContent
/** 
 * The query content.
**/
export class QueryContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamPolicyAnalysisQuery" })
  iamPolicyAnalysisQuery?: IamPolicyAnalysisQuery;
}
