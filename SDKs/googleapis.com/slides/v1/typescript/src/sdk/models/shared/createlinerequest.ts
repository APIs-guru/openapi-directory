import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";


export enum CreateLineRequestCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED",
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}

export enum CreateLineRequestLineCategoryEnum {
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}


// CreateLineRequest
/** 
 * Creates a line.
**/
export class CreateLineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: CreateLineRequestCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @SpeakeasyMetadata({ data: "json, name=lineCategory" })
  lineCategory?: CreateLineRequestLineCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
