import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";
import { Value } from "./value";


export enum PropertyFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
    Equal = "EQUAL",
    In = "IN",
    NotEqual = "NOT_EQUAL",
    HasAncestor = "HAS_ANCESTOR",
    NotIn = "NOT_IN"
}


// PropertyFilter
/** 
 * A filter on a specific property.
**/
export class PropertyFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: PropertyFilterOpEnum;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: PropertyReference;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Value;
}
