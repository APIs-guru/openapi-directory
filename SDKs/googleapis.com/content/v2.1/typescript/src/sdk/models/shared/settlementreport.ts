import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



// SettlementReport
/** 
 *  Settlement reports detail order-level and item-level credits and debits between you and Google.
**/
export class SettlementReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=previousBalance" })
  previousBalance?: Price;

  @SpeakeasyMetadata({ data: "json, name=settlementId" })
  settlementId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=transferAmount" })
  transferAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=transferDate" })
  transferDate?: string;

  @SpeakeasyMetadata({ data: "json, name=transferIds" })
  transferIds?: string[];
}
