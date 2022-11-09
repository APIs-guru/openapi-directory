import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnPolicy } from "./returnpolicy";


export class ReturnpolicyCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=returnPolicy" })
  returnPolicy?: ReturnPolicy;

  @Metadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;
}
