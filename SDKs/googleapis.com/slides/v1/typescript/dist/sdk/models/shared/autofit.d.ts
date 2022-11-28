import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutofitAutofitTypeEnum {
    AutofitTypeUnspecified = "AUTOFIT_TYPE_UNSPECIFIED",
    None = "NONE",
    TextAutofit = "TEXT_AUTOFIT",
    ShapeAutofit = "SHAPE_AUTOFIT"
}
/**
 * The autofit properties of a Shape.
**/
export declare class Autofit extends SpeakeasyBase {
    autofitType?: AutofitAutofitTypeEnum;
    fontScale?: number;
    lineSpacingReduction?: number;
}
