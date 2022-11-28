import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";



export class ProductsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Product })
  resources?: Product[];
}
