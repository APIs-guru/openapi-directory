import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceManifest
/** 
 * ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
**/
export class ResourceManifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterScoped" })
  clusterScoped?: boolean;

  @Metadata({ data: "json, name=manifest" })
  manifest?: string;
}
