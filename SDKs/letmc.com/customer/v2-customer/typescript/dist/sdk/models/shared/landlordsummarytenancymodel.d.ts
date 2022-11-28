import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Landlord Summary - Landing Page.
**/
export declare class LandlordSummaryTenancyModel extends SpeakeasyBase {
    bond?: number;
    branchId?: string;
    description?: string;
    globalReference?: string;
    id?: string;
    maintenanceJobs?: number;
    managedRent?: boolean;
    propertyAddress?: string;
    rent?: string;
    rentArrears?: number;
    rentCollected?: number;
    tenancyProperty?: string;
    tenancyState?: string;
}
