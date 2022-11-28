import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";



// DataValidationRule
/** 
 * A data validation rule.
**/
export class DataValidationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @SpeakeasyMetadata({ data: "json, name=inputMessage" })
  inputMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=showCustomUi" })
  showCustomUi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strict" })
  strict?: boolean;
}
