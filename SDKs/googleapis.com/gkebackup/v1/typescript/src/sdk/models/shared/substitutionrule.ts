import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupKind } from "./groupkind";



// SubstitutionRule
/** 
 * A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
**/
export class SubstitutionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: string;

  @SpeakeasyMetadata({ data: "json, name=originalValuePattern" })
  originalValuePattern?: string;

  @SpeakeasyMetadata({ data: "json, name=targetGroupKinds", elemType: GroupKind })
  targetGroupKinds?: GroupKind[];

  @SpeakeasyMetadata({ data: "json, name=targetJsonPath" })
  targetJsonPath?: string;

  @SpeakeasyMetadata({ data: "json, name=targetNamespaces" })
  targetNamespaces?: string[];
}
