import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";



export class ListBusinessCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCategoryCount" })
  totalCategoryCount?: number;
}
