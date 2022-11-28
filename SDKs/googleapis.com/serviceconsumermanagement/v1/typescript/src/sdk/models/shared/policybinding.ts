import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyBinding
/** 
 * Translates to IAM Policy bindings (without auditing at this level)
**/
export class PolicyBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
