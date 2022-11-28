import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordSummaryTenancyModel
/** 
 * Landlord Summary - Landing Page.
**/
export class LandlordSummaryTenancyModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bond" })
  bond?: number;

  @SpeakeasyMetadata({ data: "json, name=BranchID" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceJobs" })
  maintenanceJobs?: number;

  @SpeakeasyMetadata({ data: "json, name=ManagedRent" })
  managedRent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PropertyAddress" })
  propertyAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Rent" })
  rent?: string;

  @SpeakeasyMetadata({ data: "json, name=RentArrears" })
  rentArrears?: number;

  @SpeakeasyMetadata({ data: "json, name=RentCollected" })
  rentCollected?: number;

  @SpeakeasyMetadata({ data: "json, name=TenancyProperty" })
  tenancyProperty?: string;

  @SpeakeasyMetadata({ data: "json, name=TenancyState" })
  tenancyState?: string;
}
