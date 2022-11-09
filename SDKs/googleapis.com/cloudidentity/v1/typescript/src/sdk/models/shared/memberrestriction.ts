import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RestrictionEvaluation } from "./restrictionevaluation";


// MemberRestriction
/** 
 * The definition of MemberRestriction
**/
export class MemberRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluation" })
  evaluation?: RestrictionEvaluation;

  @Metadata({ data: "json, name=query" })
  query?: string;
}
