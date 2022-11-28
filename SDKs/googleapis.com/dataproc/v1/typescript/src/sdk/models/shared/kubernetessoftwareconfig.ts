import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KubernetesSoftwareConfig
/** 
 * The software configuration for this Dataproc cluster running on Kubernetes.
**/
export class KubernetesSoftwareConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
