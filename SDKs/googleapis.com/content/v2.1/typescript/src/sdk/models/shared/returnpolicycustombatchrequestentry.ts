import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";



export class ReturnpolicyCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPolicy" })
  returnPolicy?: ReturnPolicy;

  @SpeakeasyMetadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;
}
