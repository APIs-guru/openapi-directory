import { SpeakeasyBase } from "../../../internal/utils";
import { ObFeeCategory1CodeEnum } from "./obfeecategory1codeenum";
/**
 * Other Fee/charge type which is not available in the standard code set
**/
export declare class ObOtherFeeChargeDetailType extends SpeakeasyBase {
    code?: string;
    description: string;
    feeCategory: ObFeeCategory1CodeEnum;
    name: string;
}
