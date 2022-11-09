import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CreditEstimate
/** 
 * An estimated credit applied to the costs on a SKU.
**/
export class CreditEstimate extends SpeakeasyBase {
  @Metadata({ data: "json, name=creditAmount" })
  creditAmount?: Money;

  @Metadata({ data: "json, name=creditDescription" })
  creditDescription?: string;

  @Metadata({ data: "json, name=creditType" })
  creditType?: string;
}
