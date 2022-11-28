import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordSummaryTenancyModel } from "./landlordsummarytenancymodel";
/**
 * Landlord Summary - Landing Page.
**/
export declare class LandlordSummaryModel extends SpeakeasyBase {
    accountBalance?: number;
    lastPayment?: Date;
    tenancies?: LandlordSummaryTenancyModel[];
    totalRentArrears?: number;
}
