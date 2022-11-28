import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PolicyControllerMonitoringConfigBackendsEnum {
    MonitoringBackendUnspecified = "MONITORING_BACKEND_UNSPECIFIED",
    Prometheus = "PROMETHEUS",
    CloudMonitoring = "CLOUD_MONITORING"
}


// PolicyControllerMonitoringConfig
/** 
 * MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
**/
export class PolicyControllerMonitoringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backends" })
  backends?: PolicyControllerMonitoringConfigBackendsEnum[];
}
