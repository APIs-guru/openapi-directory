import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoredProject
/** 
 * A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
**/
export class MonitoredProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
