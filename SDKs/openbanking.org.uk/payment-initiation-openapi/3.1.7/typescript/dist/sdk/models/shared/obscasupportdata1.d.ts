import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObscaSupportData1AppliedAuthenticationApproachEnum {
    Ca = "CA",
    Sca = "SCA"
}
export declare enum ObscaSupportData1RequestedScaExemptionTypeEnum {
    BillPayment = "BillPayment",
    ContactlessTravel = "ContactlessTravel",
    EcommerceGoods = "EcommerceGoods",
    EcommerceServices = "EcommerceServices",
    Kiosk = "Kiosk",
    Parking = "Parking",
    PartyToParty = "PartyToParty"
}
/**
 * Supporting Data provided by TPP, when requesting SCA Exemption.
**/
export declare class ObscaSupportData1 extends SpeakeasyBase {
    appliedAuthenticationApproach?: ObscaSupportData1AppliedAuthenticationApproachEnum;
    referencePaymentOrderId?: string;
    requestedScaExemptionType?: ObscaSupportData1RequestedScaExemptionTypeEnum;
}
