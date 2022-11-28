import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AliasContextKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    Fixed = "FIXED",
    Movable = "MOVABLE",
    Other = "OTHER"
}
/**
 * An alias to a repo revision.
**/
export declare class AliasContext extends SpeakeasyBase {
    kind?: AliasContextKindEnum;
    name?: string;
}
