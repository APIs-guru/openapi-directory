import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentCategory } from "./contentcategory";


// ContentCategoriesListResponse
/** 
 * Content Category List Response
**/
export class ContentCategoriesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentCategories", elemType: shared.ContentCategory })
  contentCategories?: ContentCategory[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
