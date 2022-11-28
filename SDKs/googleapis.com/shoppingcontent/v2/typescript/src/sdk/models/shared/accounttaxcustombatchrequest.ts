import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccounttaxCustomBatchRequestEntry } from "./accounttaxcustombatchrequestentry";



export class AccounttaxCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccounttaxCustomBatchRequestEntry })
  entries?: AccounttaxCustomBatchRequestEntry[];
}
