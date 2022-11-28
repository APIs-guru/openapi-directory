import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductStatus } from "./productstatus";



export class ProductstatusesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ProductStatus })
  resources?: ProductStatus[];
}
