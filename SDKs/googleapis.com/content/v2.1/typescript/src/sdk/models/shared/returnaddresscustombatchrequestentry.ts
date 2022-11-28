import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";



export class ReturnaddressCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @SpeakeasyMetadata({ data: "json, name=returnAddressId" })
  returnAddressId?: string;
}
