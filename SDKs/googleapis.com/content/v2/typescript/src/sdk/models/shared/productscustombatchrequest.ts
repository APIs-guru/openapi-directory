import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductsCustomBatchRequestEntry } from "./productscustombatchrequestentry";


export class ProductsCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ProductsCustomBatchRequestEntry })
  entries?: ProductsCustomBatchRequestEntry[];
}
