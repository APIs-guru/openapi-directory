import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Result of a funds availability check.
**/
export declare class ObWriteFundsConfirmationResponse1DataFundsAvailableResult extends SpeakeasyBase {
    fundsAvailable: boolean;
    fundsAvailableDateTime: Date;
}
export declare class ObWriteFundsConfirmationResponse1Data extends SpeakeasyBase {
    fundsAvailableResult?: ObWriteFundsConfirmationResponse1DataFundsAvailableResult;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteFundsConfirmationResponse1 extends SpeakeasyBase {
    data: ObWriteFundsConfirmationResponse1Data;
    links?: Links;
    meta?: Meta;
}
