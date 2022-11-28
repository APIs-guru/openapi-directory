import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordChaseNoteModel } from "./landlordchasenotemodel";
import { LandlordRentOustandingItem } from "./landlordrentoustandingitem";



// LandlordRentArrearsModel
/** 
 * Landlord Rent Arrears.
**/
export class LandlordRentArrearsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChaseNotes", elemType: LandlordChaseNoteModel })
  chaseNotes?: LandlordChaseNoteModel[];

  @SpeakeasyMetadata({ data: "json, name=RentCollected" })
  rentCollected?: number;

  @SpeakeasyMetadata({ data: "json, name=RentOutstanding", elemType: LandlordRentOustandingItem })
  rentOutstanding?: LandlordRentOustandingItem[];

  @SpeakeasyMetadata({ data: "json, name=TotalRentArrears" })
  totalRentArrears?: number;
}
