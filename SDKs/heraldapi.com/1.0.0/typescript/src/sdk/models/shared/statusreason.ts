import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatusReason
/** 
 * This will be returned when the status is declined, referred, or unsupported. When the source is "Carrier" the status reason is from the integrated carrier. When the source is "API", the reason has been cleaned by Herald.
**/
export class StatusReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
