import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VariableStateEnum {
    VariableStateUnspecified = "VARIABLE_STATE_UNSPECIFIED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
/**
 * Describes a single variable within a RuntimeConfig resource. The name denotes the hierarchical variable name. For example, `ports/serving_port` is a valid variable name. The variable value is an opaque string and only leaf variables can have values (that is, variables that do not have any child variables).
**/
export declare class Variable extends SpeakeasyBase {
    name?: string;
    state?: VariableStateEnum;
    text?: string;
    updateTime?: string;
    value?: string;
}
