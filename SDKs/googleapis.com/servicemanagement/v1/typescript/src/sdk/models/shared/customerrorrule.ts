import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomErrorRule
/** 
 * A custom error rule.
**/
export class CustomErrorRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isErrorType" })
  isErrorType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}
