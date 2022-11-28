import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObjectFilterStatusEnum {
    None = "NONE",
    Assigned = "ASSIGNED",
    All = "ALL"
}
/**
 * Object Filter.
**/
export declare class ObjectFilter extends SpeakeasyBase {
    kind?: string;
    objectIds?: string[];
    status?: ObjectFilterStatusEnum;
}
