import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceManifest
/** 
 * ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
**/
export class ResourceManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterScoped" })
  clusterScoped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=manifest" })
  manifest?: string;
}
