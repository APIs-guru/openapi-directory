import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigManagementPolicyControllerMonitoringBackendsEnum {
    MonitoringBackendUnspecified = "MONITORING_BACKEND_UNSPECIFIED",
    Prometheus = "PROMETHEUS",
    CloudMonitoring = "CLOUD_MONITORING"
}


// ConfigManagementPolicyControllerMonitoring
/** 
 * PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
**/
export class ConfigManagementPolicyControllerMonitoring extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backends" })
  backends?: ConfigManagementPolicyControllerMonitoringBackendsEnum[];
}
