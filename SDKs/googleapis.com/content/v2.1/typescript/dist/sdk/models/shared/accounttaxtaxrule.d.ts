import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tax calculation rule to apply in a state or province (US only).
**/
export declare class AccountTaxTaxRule extends SpeakeasyBase {
    country?: string;
    locationId?: string;
    ratePercent?: string;
    shippingTaxed?: boolean;
    useGlobalRate?: boolean;
}
