import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateLineCategoryRequestLineCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED",
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}
/**
 * Updates the category of a line.
**/
export declare class UpdateLineCategoryRequest extends SpeakeasyBase {
    lineCategory?: UpdateLineCategoryRequestLineCategoryEnum;
    objectId?: string;
}
