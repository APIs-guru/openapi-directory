import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


// CategoryListResponse
/** 
 * A third party list metagame categories response.
**/
export class CategoryListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Category })
  items?: Category[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
