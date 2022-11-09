import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupKind } from "./groupkind";


// SubstitutionRule
/** 
 * A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
**/
export class SubstitutionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=newValue" })
  newValue?: string;

  @Metadata({ data: "json, name=originalValuePattern" })
  originalValuePattern?: string;

  @Metadata({ data: "json, name=targetGroupKinds", elemType: shared.GroupKind })
  targetGroupKinds?: GroupKind[];

  @Metadata({ data: "json, name=targetJsonPath" })
  targetJsonPath?: string;

  @Metadata({ data: "json, name=targetNamespaces" })
  targetNamespaces?: string[];
}
