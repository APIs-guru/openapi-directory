import { SpeakeasyBase } from "../../../internal/utils";
import { GroupKind } from "./groupkind";
/**
 * A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
**/
export declare class SubstitutionRule extends SpeakeasyBase {
    newValue?: string;
    originalValuePattern?: string;
    targetGroupKinds?: GroupKind[];
    targetJsonPath?: string;
    targetNamespaces?: string[];
}
