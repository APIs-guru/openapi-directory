import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordRentOustandingItem
/** 
 * Outstanding Rent
**/
export class LandlordRentOustandingItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DebtDays" })
  debtDays?: number;

  @SpeakeasyMetadata({ data: "json, name=OutstandingRent" })
  outstandingRent?: number;

  @SpeakeasyMetadata({ data: "json, name=Property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=Tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "json, name=TenantID" })
  tenantId?: string;
}
