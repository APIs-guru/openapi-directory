import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Field } from "./field";
/**
 * EntityType message contains metadata information about a single entity type present in the external system.
**/
export declare class EntityType extends SpeakeasyBase {
    fields?: Field[];
    name?: string;
}
