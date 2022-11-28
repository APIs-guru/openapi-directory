import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OneTimeSchedule
/** 
 * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
**/
export class OneTimeSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executeTime" })
  executeTime?: string;
}
