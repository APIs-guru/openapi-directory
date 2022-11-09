import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyReference } from "./propertyreference";

export enum PropertyOrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// PropertyOrder
/** 
 * The desired order for a specific property.
**/
export class PropertyOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: PropertyOrderDirectionEnum;

  @Metadata({ data: "json, name=property" })
  property?: PropertyReference;
}
