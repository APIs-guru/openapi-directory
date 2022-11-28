import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateLineCategoryRequestLineCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED",
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}


// UpdateLineCategoryRequest
/** 
 * Updates the category of a line.
**/
export class UpdateLineCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineCategory" })
  lineCategory?: UpdateLineCategoryRequestLineCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
