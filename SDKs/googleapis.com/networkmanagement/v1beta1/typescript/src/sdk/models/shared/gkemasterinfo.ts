import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeMasterInfo
/** 
 * For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
**/
export class GkeMasterInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterNetworkUri" })
  clusterNetworkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterUri" })
  clusterUri?: string;

  @SpeakeasyMetadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=internalIp" })
  internalIp?: string;
}
