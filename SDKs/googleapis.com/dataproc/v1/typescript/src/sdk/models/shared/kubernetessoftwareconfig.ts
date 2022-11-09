import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KubernetesSoftwareConfig
/** 
 * The software configuration for this Dataproc cluster running on Kubernetes.
**/
export class KubernetesSoftwareConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: Map<string, string>;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
