import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoredProject } from "./monitoredproject";



// MetricsScope
/** 
 * Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.
**/
export class MetricsScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=monitoredProjects", elemType: MonitoredProject })
  monitoredProjects?: MonitoredProject[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
