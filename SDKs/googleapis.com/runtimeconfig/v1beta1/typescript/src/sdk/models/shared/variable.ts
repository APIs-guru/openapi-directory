import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VariableStateEnum {
    VariableStateUnspecified = "VARIABLE_STATE_UNSPECIFIED"
,    Updated = "UPDATED"
,    Deleted = "DELETED"
}


// Variable
/** 
 * Describes a single variable within a RuntimeConfig resource. The name denotes the hierarchical variable name. For example, `ports/serving_port` is a valid variable name. The variable value is an opaque string and only leaf variables can have values (that is, variables that do not have any child variables).
**/
export class Variable extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: VariableStateEnum;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
