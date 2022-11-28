import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";


export enum PropertyOrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// PropertyOrder
/** 
 * The desired order for a specific property.
**/
export class PropertyOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: PropertyOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: PropertyReference;
}
