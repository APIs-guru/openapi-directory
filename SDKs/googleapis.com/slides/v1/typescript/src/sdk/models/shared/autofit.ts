import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutofitAutofitTypeEnum {
    AutofitTypeUnspecified = "AUTOFIT_TYPE_UNSPECIFIED",
    None = "NONE",
    TextAutofit = "TEXT_AUTOFIT",
    ShapeAutofit = "SHAPE_AUTOFIT"
}


// Autofit
/** 
 * The autofit properties of a Shape.
**/
export class Autofit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autofitType" })
  autofitType?: AutofitAutofitTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=fontScale" })
  fontScale?: number;

  @SpeakeasyMetadata({ data: "json, name=lineSpacingReduction" })
  lineSpacingReduction?: number;
}
