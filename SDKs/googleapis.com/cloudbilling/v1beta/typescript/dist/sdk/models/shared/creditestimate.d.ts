import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * An estimated credit applied to the costs on a SKU.
**/
export declare class CreditEstimate extends SpeakeasyBase {
    creditAmount?: Money;
    creditDescription?: string;
    creditType?: string;
}
