import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringComponentConfig } from "./monitoringcomponentconfig";
import { ManagedPrometheusConfig } from "./managedprometheusconfig";



// MonitoringConfig
/** 
 * MonitoringConfig is cluster monitoring configuration.
**/
export class MonitoringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentConfig" })
  componentConfig?: MonitoringComponentConfig;

  @SpeakeasyMetadata({ data: "json, name=managedPrometheusConfig" })
  managedPrometheusConfig?: ManagedPrometheusConfig;
}
