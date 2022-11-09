import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PolicyBinding
/** 
 * Translates to IAM Policy bindings (without auditing at this level)
**/
export class PolicyBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=role" })
  role?: string;
}
