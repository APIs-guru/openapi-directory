import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SettlementTransactionTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=postDate" })
  postDate?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
