import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


export class ListBusinessCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories?: Category[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalCategoryCount" })
  totalCategoryCount?: number;
}
