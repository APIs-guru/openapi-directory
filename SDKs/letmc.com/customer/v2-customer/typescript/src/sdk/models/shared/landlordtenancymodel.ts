import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordMaintenanceCertificateModel } from "./landlordmaintenancecertificatemodel";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
import { LandlordLettingsInspectionModel } from "./landlordlettingsinspectionmodel";
import { LandlordMaintenancePreferenceModel } from "./landlordmaintenancepreferencemodel";


// LandlordTenancyModel
/** 
 * Landlord Tenancy Model.
**/
export class LandlordTenancyModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualEndDate" })
  actualEndDate?: Date;

  @Metadata({ data: "json, name=Beds" })
  beds?: number;

  @Metadata({ data: "json, name=Bond" })
  bond?: number;

  @Metadata({ data: "json, name=BranchID" })
  branchId?: string;

  @Metadata({ data: "json, name=Certificates", elemType: shared.LandlordMaintenanceCertificateModel })
  certificates?: LandlordMaintenanceCertificateModel[];

  @Metadata({ data: "json, name=Documents", elemType: shared.LettingsLandlordDocument })
  documents?: LettingsLandlordDocument[];

  @Metadata({ data: "json, name=FixedDate" })
  fixedDate?: Date;

  @Metadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=Inspections", elemType: shared.LandlordLettingsInspectionModel })
  inspections?: LandlordLettingsInspectionModel[];

  @Metadata({ data: "json, name=ManagedRent" })
  managedRent?: boolean;

  @Metadata({ data: "json, name=Preferences", elemType: shared.LandlordMaintenancePreferenceModel })
  preferences?: LandlordMaintenancePreferenceModel[];

  @Metadata({ data: "json, name=PreviousRentAmount" })
  previousRentAmount?: number;

  @Metadata({ data: "json, name=PropertyAddress" })
  propertyAddress?: string;

  @Metadata({ data: "json, name=Rent" })
  rent?: string;

  @Metadata({ data: "json, name=RentAmount" })
  rentAmount?: number;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=TenancyProperty" })
  tenancyProperty?: string;

  @Metadata({ data: "json, name=TenancyState" })
  tenancyState?: string;

  @Metadata({ data: "json, name=Tenants" })
  tenants?: string[];
}
