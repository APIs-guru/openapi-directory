import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CompleteIpRotationRequest
/** 
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
**/
export class CompleteIpRotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
