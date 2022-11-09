import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageElementProperties } from "./pageelementproperties";

export enum CreateLineRequestCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED"
,    Straight = "STRAIGHT"
,    Bent = "BENT"
,    Curved = "CURVED"
}

export enum CreateLineRequestLineCategoryEnum {
    Straight = "STRAIGHT"
,    Bent = "BENT"
,    Curved = "CURVED"
}


// CreateLineRequest
/** 
 * Creates a line.
**/
export class CreateLineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: CreateLineRequestCategoryEnum;

  @Metadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @Metadata({ data: "json, name=lineCategory" })
  lineCategory?: CreateLineRequestLineCategoryEnum;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
