import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FullProductUpdateRequest } from "./fullproductupdaterequest";


export class BulkImportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=products", elemType: shared.FullProductUpdateRequest })
  products: FullProductUpdateRequest[];
}
