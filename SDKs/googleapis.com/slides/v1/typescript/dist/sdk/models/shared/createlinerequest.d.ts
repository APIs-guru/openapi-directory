import { SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";
export declare enum CreateLineRequestCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED",
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}
export declare enum CreateLineRequestLineCategoryEnum {
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}
/**
 * Creates a line.
**/
export declare class CreateLineRequest extends SpeakeasyBase {
    category?: CreateLineRequestCategoryEnum;
    elementProperties?: PageElementProperties;
    lineCategory?: CreateLineRequestLineCategoryEnum;
    objectId?: string;
}
