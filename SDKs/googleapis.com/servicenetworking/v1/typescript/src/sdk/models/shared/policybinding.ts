import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PolicyBinding
/** 
 * Grouping of IAM role and IAM member.
**/
export class PolicyBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}
