import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountsCustomBatchResponseEntry } from "./accountscustombatchresponseentry";



export class AccountsCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccountsCustomBatchResponseEntry })
  entries?: AccountsCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
