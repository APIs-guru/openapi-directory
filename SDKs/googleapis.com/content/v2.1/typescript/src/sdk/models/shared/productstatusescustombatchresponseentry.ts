import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";
import { ProductStatus } from "./productstatus";


// ProductstatusesCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch productstatuses response.
**/
export class ProductstatusesCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=productStatus" })
  productStatus?: ProductStatus;
}
