import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
**/
export declare class TargetProject extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    name?: string;
    project?: string;
    updateTime?: string;
}
/**
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
**/
export declare class TargetProjectInput extends SpeakeasyBase {
    description?: string;
    project?: string;
}
