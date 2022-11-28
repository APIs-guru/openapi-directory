import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SettlementTransactionTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postDate" })
  postDate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
