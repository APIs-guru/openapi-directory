import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccounttaxCustomBatchRequestEntry } from "./accounttaxcustombatchrequestentry";


export class AccounttaxCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AccounttaxCustomBatchRequestEntry })
  entries?: AccounttaxCustomBatchRequestEntry[];
}
