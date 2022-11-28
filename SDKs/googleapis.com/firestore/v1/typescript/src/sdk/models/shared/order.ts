import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";


export enum OrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// Order
/** 
 * An order on a field.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: OrderDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: FieldReference;
}
