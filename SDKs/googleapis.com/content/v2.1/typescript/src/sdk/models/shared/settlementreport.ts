import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";


// SettlementReport
/** 
 *  Settlement reports detail order-level and item-level credits and debits between you and Google.
**/
export class SettlementReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=previousBalance" })
  previousBalance?: Price;

  @Metadata({ data: "json, name=settlementId" })
  settlementId?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=transferAmount" })
  transferAmount?: Price;

  @Metadata({ data: "json, name=transferDate" })
  transferDate?: string;

  @Metadata({ data: "json, name=transferIds" })
  transferIds?: string[];
}
