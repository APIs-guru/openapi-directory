import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringComponentConfig } from "./monitoringcomponentconfig";
import { ManagedPrometheusConfig } from "./managedprometheusconfig";
/**
 * MonitoringConfig is cluster monitoring configuration.
**/
export declare class MonitoringConfig extends SpeakeasyBase {
    componentConfig?: MonitoringComponentConfig;
    managedPrometheusConfig?: ManagedPrometheusConfig;
}
