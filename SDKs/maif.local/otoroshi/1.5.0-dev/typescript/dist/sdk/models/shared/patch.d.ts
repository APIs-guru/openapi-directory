import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatchOpEnum {
    Add = "add",
    Replace = "replace",
    Remove = "remove",
    Copy = "copy",
    Test = "test"
}
export declare class Patch extends SpeakeasyBase {
    op: PatchOpEnum;
    path: string;
    value?: any;
}
