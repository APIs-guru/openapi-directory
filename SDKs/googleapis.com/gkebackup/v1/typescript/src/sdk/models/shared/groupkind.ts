import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupKind
/** 
 * This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore.
**/
export class GroupKind extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGroup" })
  resourceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceKind" })
  resourceKind?: string;
}
