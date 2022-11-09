import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolidFill } from "./solidfill";
import { StretchedPictureFill } from "./stretchedpicturefill";

export enum PageBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED"
,    NotRendered = "NOT_RENDERED"
,    Inherit = "INHERIT"
}


// PageBackgroundFill
/** 
 * The page background fill.
**/
export class PageBackgroundFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=propertyState" })
  propertyState?: PageBackgroundFillPropertyStateEnum;

  @Metadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;

  @Metadata({ data: "json, name=stretchedPictureFill" })
  stretchedPictureFill?: StretchedPictureFill;
}
