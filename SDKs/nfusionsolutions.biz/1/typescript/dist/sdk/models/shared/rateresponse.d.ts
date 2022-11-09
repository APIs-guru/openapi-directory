import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rate } from "./rate";
export declare class RateResponse extends SpeakeasyBase {
    data?: Rate;
    error?: string;
    requestedCurrency?: string;
    requestedSymbol?: string;
    requestedUnitOfMeasure?: string;
    success?: boolean;
}
