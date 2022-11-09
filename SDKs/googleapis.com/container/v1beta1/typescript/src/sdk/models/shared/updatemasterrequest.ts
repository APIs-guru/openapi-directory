import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateMasterRequest
/** 
 * UpdateMasterRequest updates the master of the cluster.
**/
export class UpdateMasterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=masterVersion" })
  masterVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
