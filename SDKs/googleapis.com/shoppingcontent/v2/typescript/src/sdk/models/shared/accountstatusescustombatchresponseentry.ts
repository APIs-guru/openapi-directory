import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountStatus } from "./accountstatus";
import { Errors } from "./errors";


// AccountstatusesCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch accountstatuses response.
**/
export class AccountstatusesCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountStatus" })
  accountStatus?: AccountStatus;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;
}
