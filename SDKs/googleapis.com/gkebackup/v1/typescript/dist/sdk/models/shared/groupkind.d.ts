import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore.
**/
export declare class GroupKind extends SpeakeasyBase {
    resourceGroup?: string;
    resourceKind?: string;
}
