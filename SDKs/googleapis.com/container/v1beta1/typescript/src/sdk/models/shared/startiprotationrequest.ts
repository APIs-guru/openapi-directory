import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartIpRotationRequest
/** 
 * StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
**/
export class StartIpRotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=rotateCredentials" })
  rotateCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
