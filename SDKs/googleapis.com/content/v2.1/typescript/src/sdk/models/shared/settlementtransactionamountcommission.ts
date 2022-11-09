import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SettlementTransactionAmountCommission extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: string;
}
