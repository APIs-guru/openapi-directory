import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuccessDetail
/** 
 * Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
**/
export class SuccessDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=otherNativeCrash" })
  otherNativeCrash?: boolean;
}
