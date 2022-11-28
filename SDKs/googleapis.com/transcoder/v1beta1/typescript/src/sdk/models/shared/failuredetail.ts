import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailureDetail
/** 
 * Additional information about the reasons for the failure.
**/
export class FailureDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
