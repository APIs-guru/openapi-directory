import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomErrorRule
/** 
 * A custom error rule.
**/
export class CustomErrorRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=isErrorType" })
  isErrorType?: boolean;

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}
