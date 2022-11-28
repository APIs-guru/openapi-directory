import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";


export enum ShapeBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}


// ShapeBackgroundFill
/** 
 * The shape background fill.
**/
export class ShapeBackgroundFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyState" })
  propertyState?: ShapeBackgroundFillPropertyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
