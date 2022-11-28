import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettlementReport } from "./settlementreport";



export class SettlementreportsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: SettlementReport })
  resources?: SettlementReport[];
}
