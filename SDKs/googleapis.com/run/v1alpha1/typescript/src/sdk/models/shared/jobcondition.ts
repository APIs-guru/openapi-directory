import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobCondition
/** 
 * JobCondition defines a readiness condition for a Revision.
**/
export class JobCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastTransitionTime" })
  lastTransitionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
