import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum V2ModelContentCategoriesVersionEnum {
    ContentCategoriesVersionUnspecified = "CONTENT_CATEGORIES_VERSION_UNSPECIFIED"
,    V1 = "V1"
,    V2 = "V2"
}


// V2Model
/** 
 * Options for the V2 model.
**/
export class V2Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentCategoriesVersion" })
  contentCategoriesVersion?: V2ModelContentCategoriesVersionEnum;
}
