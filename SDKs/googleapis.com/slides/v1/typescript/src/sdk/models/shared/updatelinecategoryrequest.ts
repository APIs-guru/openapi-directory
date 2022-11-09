import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateLineCategoryRequestLineCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED"
,    Straight = "STRAIGHT"
,    Bent = "BENT"
,    Curved = "CURVED"
}


// UpdateLineCategoryRequest
/** 
 * Updates the category of a line.
**/
export class UpdateLineCategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineCategory" })
  lineCategory?: UpdateLineCategoryRequestLineCategoryEnum;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
