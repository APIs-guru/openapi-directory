import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Condition } from "./condition";


// Rule
/** 
 * Represents a Google Tag Manager Rule.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=condition", elemType: shared.Condition })
  condition?: Condition[];

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=ruleId" })
  ruleId?: string;
}
