import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Label } from "./label";
export declare enum SectionSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Food = "FOOD",
    Services = "SERVICES"
}
/**
 * A section of the price list containing one or more items.
**/
export declare class Section extends SpeakeasyBase {
    items?: Item[];
    labels?: Label[];
    sectionId?: string;
    sectionType?: SectionSectionTypeEnum;
}
