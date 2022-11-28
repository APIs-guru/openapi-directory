import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FullProductUpdateRequest } from "./fullproductupdaterequest";



export class BulkImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: FullProductUpdateRequest })
  products: FullProductUpdateRequest[];
}
