import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolidFill } from "./solidfill";

export enum ShapeBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED"
,    NotRendered = "NOT_RENDERED"
,    Inherit = "INHERIT"
}


// ShapeBackgroundFill
/** 
 * The shape background fill.
**/
export class ShapeBackgroundFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=propertyState" })
  propertyState?: ShapeBackgroundFillPropertyStateEnum;

  @Metadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
