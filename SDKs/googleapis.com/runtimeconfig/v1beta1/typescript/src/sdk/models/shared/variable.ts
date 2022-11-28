import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VariableStateEnum {
    VariableStateUnspecified = "VARIABLE_STATE_UNSPECIFIED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}


// Variable
/** 
 * Describes a single variable within a RuntimeConfig resource. The name denotes the hierarchical variable name. For example, `ports/serving_port` is a valid variable name. The variable value is an opaque string and only leaf variables can have values (that is, variables that do not have any child variables).
**/
export class Variable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VariableStateEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
