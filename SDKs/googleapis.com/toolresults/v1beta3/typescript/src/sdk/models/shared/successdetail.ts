import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuccessDetail
/** 
 * Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
**/
export class SuccessDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=otherNativeCrash" })
  otherNativeCrash?: boolean;
}
