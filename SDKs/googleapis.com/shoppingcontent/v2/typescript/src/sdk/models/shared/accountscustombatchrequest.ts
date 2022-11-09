import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountsCustomBatchRequestEntry } from "./accountscustombatchrequestentry";


export class AccountsCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AccountsCustomBatchRequestEntry })
  entries?: AccountsCustomBatchRequestEntry[];
}
