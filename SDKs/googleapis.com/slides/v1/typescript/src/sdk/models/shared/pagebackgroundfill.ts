import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
import { StretchedPictureFill } from "./stretchedpicturefill";


export enum PageBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}


// PageBackgroundFill
/** 
 * The page background fill.
**/
export class PageBackgroundFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyState" })
  propertyState?: PageBackgroundFillPropertyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;

  @SpeakeasyMetadata({ data: "json, name=stretchedPictureFill" })
  stretchedPictureFill?: StretchedPictureFill;
}
