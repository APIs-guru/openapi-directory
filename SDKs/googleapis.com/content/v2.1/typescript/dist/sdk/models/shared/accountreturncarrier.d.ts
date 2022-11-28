import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountReturnCarrierCarrierCodeEnum {
    CarrierCodeUnspecified = "CARRIER_CODE_UNSPECIFIED",
    Fedex = "FEDEX",
    Ups = "UPS"
}
/**
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
**/
export declare class AccountReturnCarrier extends SpeakeasyBase {
    carrierAccountId?: string;
    carrierAccountName?: string;
    carrierAccountNumber?: string;
    carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}
/**
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
**/
export declare class AccountReturnCarrierInput extends SpeakeasyBase {
    carrierAccountName?: string;
    carrierAccountNumber?: string;
    carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}
