import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AliasContextKindEnum {
    Any = "ANY",
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
