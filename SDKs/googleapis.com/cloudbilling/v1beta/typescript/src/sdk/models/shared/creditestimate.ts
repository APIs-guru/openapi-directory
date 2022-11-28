import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// CreditEstimate
/** 
 * An estimated credit applied to the costs on a SKU.
**/
export class CreditEstimate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditAmount" })
  creditAmount?: Money;

  @SpeakeasyMetadata({ data: "json, name=creditDescription" })
  creditDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=creditType" })
  creditType?: string;
}
