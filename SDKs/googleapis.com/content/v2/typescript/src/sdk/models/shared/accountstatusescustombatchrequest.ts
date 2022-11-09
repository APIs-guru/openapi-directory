import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountstatusesCustomBatchRequestEntry } from "./accountstatusescustombatchrequestentry";


export class AccountstatusesCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AccountstatusesCustomBatchRequestEntry })
  entries?: AccountstatusesCustomBatchRequestEntry[];
}
