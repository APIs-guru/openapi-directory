import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedPrometheusConfig
/** 
 * ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.
**/
export class ManagedPrometheusConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
