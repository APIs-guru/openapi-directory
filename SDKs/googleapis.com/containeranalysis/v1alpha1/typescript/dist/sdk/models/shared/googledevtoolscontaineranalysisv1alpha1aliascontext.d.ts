import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Fixed = "FIXED",
    Movable = "MOVABLE",
    Other = "OTHER"
}
/**
 * An alias to a repo revision.
**/
export declare class GoogleDevtoolsContaineranalysisV1alpha1AliasContext extends SpeakeasyBase {
    kind?: GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum;
    name?: string;
}
