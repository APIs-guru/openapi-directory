import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductstatusesCustomBatchResponseEntry } from "./productstatusescustombatchresponseentry";


export class ProductstatusesCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ProductstatusesCustomBatchResponseEntry })
  entries?: ProductstatusesCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
