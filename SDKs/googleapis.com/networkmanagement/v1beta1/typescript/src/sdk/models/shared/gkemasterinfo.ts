import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeMasterInfo
/** 
 * For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
**/
export class GkeMasterInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterNetworkUri" })
  clusterNetworkUri?: string;

  @Metadata({ data: "json, name=clusterUri" })
  clusterUri?: string;

  @Metadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @Metadata({ data: "json, name=internalIp" })
  internalIp?: string;
}
