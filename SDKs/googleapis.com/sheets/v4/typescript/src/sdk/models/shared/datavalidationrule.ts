import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanCondition } from "./booleancondition";


// DataValidationRule
/** 
 * A data validation rule.
**/
export class DataValidationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @Metadata({ data: "json, name=inputMessage" })
  inputMessage?: string;

  @Metadata({ data: "json, name=showCustomUi" })
  showCustomUi?: boolean;

  @Metadata({ data: "json, name=strict" })
  strict?: boolean;
}
