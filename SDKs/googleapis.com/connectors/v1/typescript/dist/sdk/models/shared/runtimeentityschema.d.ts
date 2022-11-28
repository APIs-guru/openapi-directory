import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
/**
 * Schema of a runtime entity.
**/
export declare class RuntimeEntitySchema extends SpeakeasyBase {
    entity?: string;
    fields?: Field[];
}
