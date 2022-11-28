import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAllocationPolicy } from "./ipallocationpolicy";



// NodeConfig
/** 
 * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
**/
export class NodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=enableIpMasqAgent" })
  enableIpMasqAgent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipAllocationPolicy" })
  ipAllocationPolicy?: IpAllocationPolicy;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxPodsPerNode" })
  maxPodsPerNode?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
