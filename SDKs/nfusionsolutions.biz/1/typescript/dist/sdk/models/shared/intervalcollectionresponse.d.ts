import { SpeakeasyBase } from "../../../internal/utils";
import { IntervalCollection } from "./intervalcollection";
export declare class IntervalCollectionResponse extends SpeakeasyBase {
    data?: IntervalCollection;
    error?: string;
    requestedCurrency?: string;
    requestedSymbol?: string;
    requestedUnitOfMeasure?: string;
    success?: boolean;
}
