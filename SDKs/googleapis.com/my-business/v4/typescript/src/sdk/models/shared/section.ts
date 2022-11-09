import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Item } from "./item";
import { Label } from "./label";

export enum SectionSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    Food = "FOOD"
,    Services = "SERVICES"
}


// Section
/** 
 * A section of the price list containing one or more items.
**/
export class Section extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Item })
  items?: Item[];

  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=sectionId" })
  sectionId?: string;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: SectionSectionTypeEnum;
}
