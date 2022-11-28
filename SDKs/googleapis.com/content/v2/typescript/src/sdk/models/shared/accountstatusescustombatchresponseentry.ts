import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";
import { Errors } from "./errors";



// AccountstatusesCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch accountstatuses response.
**/
export class AccountstatusesCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountStatus" })
  accountStatus?: AccountStatus;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;
}
