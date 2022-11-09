import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordRentOustandingItem
/** 
 * Outstanding Rent
**/
export class LandlordRentOustandingItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=DebtDays" })
  debtDays?: number;

  @Metadata({ data: "json, name=OutstandingRent" })
  outstandingRent?: number;

  @Metadata({ data: "json, name=Property" })
  property?: string;

  @Metadata({ data: "json, name=Tenant" })
  tenant?: string;

  @Metadata({ data: "json, name=TenantID" })
  tenantId?: string;
}
