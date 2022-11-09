import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";

export enum ParameterTypeEnum {
    Template = "template"
,    Integer = "integer"
,    Boolean = "boolean"
,    List = "list"
,    Map = "map"
,    TriggerReference = "triggerReference"
,    TagReference = "tagReference"
}


// Parameter
/** 
 * Represents a Google Tag Manager Parameter.
**/
export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=list", elemType: shared.Parameter })
  list?: Parameter[];

  @Metadata({ data: "json, name=map", elemType: shared.Parameter })
  map?: Parameter[];

  @Metadata({ data: "json, name=type" })
  type?: ParameterTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
