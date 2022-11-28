import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountsCustomBatchRequestEntryInput } from "./accountscustombatchrequestentry";



export class AccountsCustomBatchRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccountsCustomBatchRequestEntryInput })
  entries?: AccountsCustomBatchRequestEntryInput[];
}
