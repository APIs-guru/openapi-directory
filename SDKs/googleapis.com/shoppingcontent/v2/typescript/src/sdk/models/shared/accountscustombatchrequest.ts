import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountsCustomBatchRequestEntry } from "./accountscustombatchrequestentry";



export class AccountsCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccountsCustomBatchRequestEntry })
  entries?: AccountsCustomBatchRequestEntry[];
}
