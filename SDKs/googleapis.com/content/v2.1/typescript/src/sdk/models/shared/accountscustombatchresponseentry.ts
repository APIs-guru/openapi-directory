import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
import { Errors } from "./errors";


// AccountsCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch accounts response.
**/
export class AccountsCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Account;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
