import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";
import { ReturnAddress } from "./returnaddress";


export class ReturnaddressCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;
}
