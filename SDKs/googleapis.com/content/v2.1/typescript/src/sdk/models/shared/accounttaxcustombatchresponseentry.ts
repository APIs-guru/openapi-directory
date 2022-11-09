import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTax } from "./accounttax";
import { Errors } from "./errors";


// AccounttaxCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch accounttax response.
**/
export class AccounttaxCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountTax" })
  accountTax?: AccountTax;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
