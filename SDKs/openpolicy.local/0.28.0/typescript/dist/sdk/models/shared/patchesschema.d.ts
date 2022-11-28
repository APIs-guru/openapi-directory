import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatchesSchemaOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace",
    Move = "move",
    Copy = "copy",
    Test = "test"
}
/**
 * A JSON patch operation
**/
export declare class PatchesSchema extends SpeakeasyBase {
    op: PatchesSchemaOpEnum;
    path: string;
    value?: Map<string, any>;
}
