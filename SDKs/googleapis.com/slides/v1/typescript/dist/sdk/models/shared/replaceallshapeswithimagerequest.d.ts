import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
export declare enum ReplaceAllShapesWithImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}
export declare enum ReplaceAllShapesWithImageRequestReplaceMethodEnum {
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}
/**
 * Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
**/
export declare class ReplaceAllShapesWithImageRequest extends SpeakeasyBase {
    containsText?: SubstringMatchCriteria;
    imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;
    imageUrl?: string;
    pageObjectIds?: string[];
    replaceMethod?: ReplaceAllShapesWithImageRequestReplaceMethodEnum;
}
