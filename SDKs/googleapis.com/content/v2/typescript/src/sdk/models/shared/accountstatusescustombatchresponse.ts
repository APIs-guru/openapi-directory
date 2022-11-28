import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountstatusesCustomBatchResponseEntry } from "./accountstatusescustombatchresponseentry";



export class AccountstatusesCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: AccountstatusesCustomBatchResponseEntry })
  entries?: AccountstatusesCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
