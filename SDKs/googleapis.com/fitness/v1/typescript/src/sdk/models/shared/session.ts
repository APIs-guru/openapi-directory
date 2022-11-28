import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";



// Session
/** 
 * Sessions contain metadata, such as a user-friendly name and time interval information.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeTimeMillis" })
  activeTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType?: number;

  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: Application;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endTimeMillis" })
  endTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTimeMillis" })
  modifiedTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;
}
