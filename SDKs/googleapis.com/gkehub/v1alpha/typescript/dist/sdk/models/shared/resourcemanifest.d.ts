import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
**/
export declare class ResourceManifest extends SpeakeasyBase {
    clusterScoped?: boolean;
    manifest?: string;
}
