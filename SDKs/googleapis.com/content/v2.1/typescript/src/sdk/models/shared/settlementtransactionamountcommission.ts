import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SettlementTransactionAmountCommission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;
}
