import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Application } from "./application";


// Session
/** 
 * Sessions contain metadata, such as a user-friendly name and time interval information.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeTimeMillis" })
  activeTimeMillis?: string;

  @Metadata({ data: "json, name=activityType" })
  activityType?: number;

  @Metadata({ data: "json, name=application" })
  application?: Application;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endTimeMillis" })
  endTimeMillis?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=modifiedTimeMillis" })
  modifiedTimeMillis?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;
}
