import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentCategory } from "./contentcategory";



// ContentCategoriesListResponse
/** 
 * Content Category List Response
**/
export class ContentCategoriesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentCategories", elemType: ContentCategory })
  contentCategories?: ContentCategory[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
