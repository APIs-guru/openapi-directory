import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldReference } from "./fieldreference";

export enum OrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// Order
/** 
 * An order on a field.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: OrderDirectionEnum;

  @Metadata({ data: "json, name=field" })
  field?: FieldReference;
}
