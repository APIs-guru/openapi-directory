import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObscaSupportData1AppliedAuthenticationApproachEnum {
    Ca = "CA",
    Sca = "SCA"
}

export enum ObscaSupportData1RequestedScaExemptionTypeEnum {
    BillPayment = "BillPayment",
    ContactlessTravel = "ContactlessTravel",
    EcommerceGoods = "EcommerceGoods",
    EcommerceServices = "EcommerceServices",
    Kiosk = "Kiosk",
    Parking = "Parking",
    PartyToParty = "PartyToParty"
}


// ObscaSupportData1
/** 
 * Supporting Data provided by TPP, when requesting SCA Exemption.
**/
export class ObscaSupportData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppliedAuthenticationApproach" })
  appliedAuthenticationApproach?: ObscaSupportData1AppliedAuthenticationApproachEnum;

  @SpeakeasyMetadata({ data: "json, name=ReferencePaymentOrderId" })
  referencePaymentOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedSCAExemptionType" })
  requestedScaExemptionType?: ObscaSupportData1RequestedScaExemptionTypeEnum;
}
