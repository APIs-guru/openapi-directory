import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ProductStatus } from "./productstatus";



// ProductstatusesCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch productstatuses response.
**/
export class ProductstatusesCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=productStatus" })
  productStatus?: ProductStatus;
}
