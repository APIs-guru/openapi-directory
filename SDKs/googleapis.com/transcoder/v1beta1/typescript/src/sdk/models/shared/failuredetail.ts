import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailureDetail
/** 
 * Additional information about the reasons for the failure.
**/
export class FailureDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;
}
