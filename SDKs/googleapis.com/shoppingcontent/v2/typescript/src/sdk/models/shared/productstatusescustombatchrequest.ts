import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductstatusesCustomBatchRequestEntry } from "./productstatusescustombatchrequestentry";



export class ProductstatusesCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ProductstatusesCustomBatchRequestEntry })
  entries?: ProductstatusesCustomBatchRequestEntry[];
}
