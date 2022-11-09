import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnAddress } from "./returnaddress";


export class ReturnaddressCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @Metadata({ data: "json, name=returnAddressId" })
  returnAddressId?: string;
}
