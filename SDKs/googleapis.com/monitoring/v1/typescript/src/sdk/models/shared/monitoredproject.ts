import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoredProjectInput
/** 
 * A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
**/
export class MonitoredProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// MonitoredProject
/** 
 * A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
**/
export class MonitoredProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
