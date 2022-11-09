import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringComponentConfig } from "./monitoringcomponentconfig";
import { ManagedPrometheusConfig } from "./managedprometheusconfig";


// MonitoringConfig
/** 
 * MonitoringConfig is cluster monitoring configuration.
**/
export class MonitoringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentConfig" })
  componentConfig?: MonitoringComponentConfig;

  @Metadata({ data: "json, name=managedPrometheusConfig" })
  managedPrometheusConfig?: ManagedPrometheusConfig;
}
