import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompleteIpRotationRequest
/** 
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
**/
export class CompleteIpRotationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
