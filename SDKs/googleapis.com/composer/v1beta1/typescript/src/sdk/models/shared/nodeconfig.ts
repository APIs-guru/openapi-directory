import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAllocationPolicy } from "./ipallocationpolicy";


// NodeConfig
/** 
 * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
**/
export class NodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: number;

  @Metadata({ data: "json, name=enableIpMasqAgent" })
  enableIpMasqAgent?: boolean;

  @Metadata({ data: "json, name=ipAllocationPolicy" })
  ipAllocationPolicy?: IpAllocationPolicy;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=maxPodsPerNode" })
  maxPodsPerNode?: number;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=oauthScopes" })
  oauthScopes?: string[];

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
