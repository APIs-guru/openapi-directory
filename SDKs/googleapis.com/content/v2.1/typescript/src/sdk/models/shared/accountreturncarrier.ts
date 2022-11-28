import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountReturnCarrierCarrierCodeEnum {
    CarrierCodeUnspecified = "CARRIER_CODE_UNSPECIFIED",
    Fedex = "FEDEX",
    Ups = "UPS"
}


// AccountReturnCarrier
/** 
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. 
**/
export class AccountReturnCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierAccountId" })
  carrierAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierAccountName" })
  carrierAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierAccountNumber" })
  carrierAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierCode" })
  carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}


// AccountReturnCarrierInput
/** 
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. 
**/
export class AccountReturnCarrierInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierAccountName" })
  carrierAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierAccountNumber" })
  carrierAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierCode" })
  carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}
