import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateMasterRequest
/** 
 * UpdateMasterRequest updates the master of the cluster.
**/
export class UpdateMasterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=masterVersion" })
  masterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
