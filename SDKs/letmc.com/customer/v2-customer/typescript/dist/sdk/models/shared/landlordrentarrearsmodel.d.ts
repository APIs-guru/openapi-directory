import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordChaseNoteModel } from "./landlordchasenotemodel";
import { LandlordRentOustandingItem } from "./landlordrentoustandingitem";
/**
 * Landlord Rent Arrears.
**/
export declare class LandlordRentArrearsModel extends SpeakeasyBase {
    chaseNotes?: LandlordChaseNoteModel[];
    rentCollected?: number;
    rentOutstanding?: LandlordRentOustandingItem[];
    totalRentArrears?: number;
}
