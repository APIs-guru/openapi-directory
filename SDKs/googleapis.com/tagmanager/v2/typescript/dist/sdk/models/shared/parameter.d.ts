import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ParameterTypeEnum {
    TypeUnspecified = "typeUnspecified",
    Template = "template",
    Integer = "integer",
    Boolean = "boolean",
    List = "list",
    Map = "map",
    TriggerReference = "triggerReference",
    TagReference = "tagReference"
}
/**
 * Represents a Google Tag Manager Parameter.
**/
export declare class Parameter extends SpeakeasyBase {
    key?: string;
    list?: Parameter[];
    map?: Parameter[];
    type?: ParameterTypeEnum;
    value?: string;
}
