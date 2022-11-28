import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordMaintenanceCertificateModel } from "./landlordmaintenancecertificatemodel";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
import { LandlordLettingsInspectionModel } from "./landlordlettingsinspectionmodel";
import { LandlordMaintenancePreferenceModel } from "./landlordmaintenancepreferencemodel";



// LandlordTenancyModel
/** 
 * Landlord Tenancy Model.
**/
export class LandlordTenancyModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualEndDate" })
  actualEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Beds" })
  beds?: number;

  @SpeakeasyMetadata({ data: "json, name=Bond" })
  bond?: number;

  @SpeakeasyMetadata({ data: "json, name=BranchID" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=Certificates", elemType: LandlordMaintenanceCertificateModel })
  certificates?: LandlordMaintenanceCertificateModel[];

  @SpeakeasyMetadata({ data: "json, name=Documents", elemType: LettingsLandlordDocument })
  documents?: LettingsLandlordDocument[];

  @SpeakeasyMetadata({ data: "json, name=FixedDate" })
  fixedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Inspections", elemType: LandlordLettingsInspectionModel })
  inspections?: LandlordLettingsInspectionModel[];

  @SpeakeasyMetadata({ data: "json, name=ManagedRent" })
  managedRent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Preferences", elemType: LandlordMaintenancePreferenceModel })
  preferences?: LandlordMaintenancePreferenceModel[];

  @SpeakeasyMetadata({ data: "json, name=PreviousRentAmount" })
  previousRentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=PropertyAddress" })
  propertyAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Rent" })
  rent?: string;

  @SpeakeasyMetadata({ data: "json, name=RentAmount" })
  rentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TenancyProperty" })
  tenancyProperty?: string;

  @SpeakeasyMetadata({ data: "json, name=TenancyState" })
  tenancyState?: string;

  @SpeakeasyMetadata({ data: "json, name=Tenants" })
  tenants?: string[];
}
