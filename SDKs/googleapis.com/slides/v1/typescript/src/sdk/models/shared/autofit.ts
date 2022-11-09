import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AutofitAutofitTypeEnum {
    AutofitTypeUnspecified = "AUTOFIT_TYPE_UNSPECIFIED"
,    None = "NONE"
,    TextAutofit = "TEXT_AUTOFIT"
,    ShapeAutofit = "SHAPE_AUTOFIT"
}


// Autofit
/** 
 * The autofit properties of a Shape.
**/
export class Autofit extends SpeakeasyBase {
  @Metadata({ data: "json, name=autofitType" })
  autofitType?: AutofitAutofitTypeEnum;

  @Metadata({ data: "json, name=fontScale" })
  fontScale?: number;

  @Metadata({ data: "json, name=lineSpacingReduction" })
  lineSpacingReduction?: number;
}
