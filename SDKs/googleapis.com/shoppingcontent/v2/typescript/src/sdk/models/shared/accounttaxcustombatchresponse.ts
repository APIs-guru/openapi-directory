import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccounttaxCustomBatchResponseEntry } from "./accounttaxcustombatchresponseentry";



export class AccounttaxCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccounttaxCustomBatchResponseEntry })
  entries?: AccounttaxCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
