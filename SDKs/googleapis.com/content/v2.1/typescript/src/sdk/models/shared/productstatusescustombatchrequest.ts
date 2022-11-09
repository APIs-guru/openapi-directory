import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductstatusesCustomBatchRequestEntry } from "./productstatusescustombatchrequestentry";


export class ProductstatusesCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ProductstatusesCustomBatchRequestEntry })
  entries?: ProductstatusesCustomBatchRequestEntry[];
}
