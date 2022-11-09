import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobCondition
/** 
 * JobCondition defines a readiness condition for a Revision.
**/
export class JobCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastTransitionTime" })
  lastTransitionTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
