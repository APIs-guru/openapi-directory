import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountstatusesCustomBatchRequestEntry } from "./accountstatusescustombatchrequestentry";



export class AccountstatusesCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccountstatusesCustomBatchRequestEntry })
  entries?: AccountstatusesCustomBatchRequestEntry[];
}
