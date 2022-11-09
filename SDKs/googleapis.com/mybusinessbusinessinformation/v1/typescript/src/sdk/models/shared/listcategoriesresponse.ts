import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


// ListCategoriesResponse
/** 
 * Response message for BusinessCategories.ListCategories.
**/
export class ListCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories?: Category[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
