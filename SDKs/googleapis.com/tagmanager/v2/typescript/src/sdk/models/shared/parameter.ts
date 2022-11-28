import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ParameterTypeEnum {
    TypeUnspecified = "typeUnspecified",
    Template = "template",
    Integer = "integer",
    Boolean = "boolean",
    List = "list",
    Map = "map",
    TriggerReference = "triggerReference",
    TagReference = "tagReference"
}


// Parameter
/** 
 * Represents a Google Tag Manager Parameter.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=list", elemType: Parameter })
  list?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=map", elemType: Parameter })
  map?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
