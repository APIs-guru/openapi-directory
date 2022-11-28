import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedPrometheusConfig
/** 
 * ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.
**/
export class ManagedPrometheusConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
