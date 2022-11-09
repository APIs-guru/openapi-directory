import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountReturnCarrierCarrierCodeEnum {
    CarrierCodeUnspecified = "CARRIER_CODE_UNSPECIFIED"
,    Fedex = "FEDEX"
,    Ups = "UPS"
}


// AccountReturnCarrier
/** 
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. 
**/
export class AccountReturnCarrier extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierAccountId" })
  carrierAccountId?: string;

  @Metadata({ data: "json, name=carrierAccountName" })
  carrierAccountName?: string;

  @Metadata({ data: "json, name=carrierAccountNumber" })
  carrierAccountNumber?: string;

  @Metadata({ data: "json, name=carrierCode" })
  carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}
