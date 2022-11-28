import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { LogConfig } from "./logconfig";


export enum RuleActionEnum {
    NoAction = "NO_ACTION",
    Allow = "ALLOW",
    AllowWithLog = "ALLOW_WITH_LOG",
    Deny = "DENY",
    DenyWithLog = "DENY_WITH_LOG",
    Log = "LOG"
}


// Rule
/** 
 * A rule to be applied in a Policy.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: RuleActionEnum;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: Condition })
  conditions?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string[];

  @SpeakeasyMetadata({ data: "json, name=logConfig", elemType: LogConfig })
  logConfig?: LogConfig[];

  @SpeakeasyMetadata({ data: "json, name=notIn" })
  notIn?: string[];

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
