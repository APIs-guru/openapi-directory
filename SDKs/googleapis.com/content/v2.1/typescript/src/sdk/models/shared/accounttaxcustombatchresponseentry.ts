import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
import { Errors } from "./errors";



// AccounttaxCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch accounttax response.
**/
export class AccounttaxCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountTax" })
  accountTax?: AccountTax;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
