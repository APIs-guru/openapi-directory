import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransaction } from "./settlementtransaction";



export class SettlementtransactionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: SettlementTransaction })
  resources?: SettlementTransaction[];
}
