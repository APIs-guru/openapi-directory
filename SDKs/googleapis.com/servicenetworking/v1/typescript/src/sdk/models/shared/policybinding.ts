import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyBinding
/** 
 * Grouping of IAM role and IAM member.
**/
export class PolicyBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
