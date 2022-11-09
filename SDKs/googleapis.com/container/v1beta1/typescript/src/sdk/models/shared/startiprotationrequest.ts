import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartIpRotationRequest
/** 
 * StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
**/
export class StartIpRotationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=rotateCredentials" })
  rotateCredentials?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
