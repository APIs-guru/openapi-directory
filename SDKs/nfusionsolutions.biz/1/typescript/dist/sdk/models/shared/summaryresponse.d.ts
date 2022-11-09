import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Summary } from "./summary";
export declare class SummaryResponse extends SpeakeasyBase {
    data?: Summary;
    error?: string;
    requestedCurrency?: string;
    requestedSymbol?: string;
    requestedUnitOfMeasure?: string;
    success?: boolean;
}
