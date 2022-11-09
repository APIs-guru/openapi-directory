import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductsCustomBatchResponseEntry } from "./productscustombatchresponseentry";


export class ProductsCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ProductsCustomBatchResponseEntry })
  entries?: ProductsCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
