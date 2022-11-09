import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordSummaryTenancyModel
/** 
 * Landlord Summary - Landing Page.
**/
export class LandlordSummaryTenancyModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bond" })
  bond?: number;

  @Metadata({ data: "json, name=BranchID" })
  branchId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=MaintenanceJobs" })
  maintenanceJobs?: number;

  @Metadata({ data: "json, name=ManagedRent" })
  managedRent?: boolean;

  @Metadata({ data: "json, name=PropertyAddress" })
  propertyAddress?: string;

  @Metadata({ data: "json, name=Rent" })
  rent?: string;

  @Metadata({ data: "json, name=RentArrears" })
  rentArrears?: number;

  @Metadata({ data: "json, name=RentCollected" })
  rentCollected?: number;

  @Metadata({ data: "json, name=TenancyProperty" })
  tenancyProperty?: string;

  @Metadata({ data: "json, name=TenancyState" })
  tenancyState?: string;
}
