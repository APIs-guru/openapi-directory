import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ObscaSupportData1AppliedAuthenticationApproachEnum {
    Ca = "CA"
,    Sca = "SCA"
}

export enum ObscaSupportData1RequestedScaExemptionTypeEnum {
    BillPayment = "BillPayment"
,    ContactlessTravel = "ContactlessTravel"
,    EcommerceGoods = "EcommerceGoods"
,    EcommerceServices = "EcommerceServices"
,    Kiosk = "Kiosk"
,    Parking = "Parking"
,    PartyToParty = "PartyToParty"
}


// ObscaSupportData1
/** 
 * Supporting Data provided by TPP, when requesting SCA Exemption.
**/
export class ObscaSupportData1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppliedAuthenticationApproach" })
  appliedAuthenticationApproach?: ObscaSupportData1AppliedAuthenticationApproachEnum;

  @Metadata({ data: "json, name=ReferencePaymentOrderId" })
  referencePaymentOrderId?: string;

  @Metadata({ data: "json, name=RequestedSCAExemptionType" })
  requestedScaExemptionType?: ObscaSupportData1RequestedScaExemptionTypeEnum;
}
