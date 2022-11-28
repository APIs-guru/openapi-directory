import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Label } from "./label";


export enum SectionSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Food = "FOOD",
    Services = "SERVICES"
}


// Section
/** 
 * A section of the price list containing one or more items.
**/
export class Section extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Item })
  items?: Item[];

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];

  @SpeakeasyMetadata({ data: "json, name=sectionId" })
  sectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: SectionSectionTypeEnum;
}
