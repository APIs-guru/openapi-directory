import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordMaintenanceCertificateModel } from "./landlordmaintenancecertificatemodel";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
import { LandlordLettingsInspectionModel } from "./landlordlettingsinspectionmodel";
import { LandlordMaintenancePreferenceModel } from "./landlordmaintenancepreferencemodel";
/**
 * Landlord Tenancy Model.
**/
export declare class LandlordTenancyModel extends SpeakeasyBase {
    actualEndDate?: Date;
    beds?: number;
    bond?: number;
    branchId?: string;
    certificates?: LandlordMaintenanceCertificateModel[];
    documents?: LettingsLandlordDocument[];
    fixedDate?: Date;
    globalReference?: string;
    id?: string;
    inspections?: LandlordLettingsInspectionModel[];
    managedRent?: boolean;
    preferences?: LandlordMaintenancePreferenceModel[];
    previousRentAmount?: number;
    propertyAddress?: string;
    rent?: string;
    rentAmount?: number;
    startDate?: Date;
    tenancyProperty?: string;
    tenancyState?: string;
    tenants?: string[];
}
