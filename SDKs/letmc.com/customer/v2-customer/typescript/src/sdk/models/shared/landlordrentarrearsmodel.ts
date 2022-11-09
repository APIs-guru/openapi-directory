import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordChaseNoteModel } from "./landlordchasenotemodel";
import { LandlordRentOustandingItem } from "./landlordrentoustandingitem";


// LandlordRentArrearsModel
/** 
 * Landlord Rent Arrears.
**/
export class LandlordRentArrearsModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChaseNotes", elemType: shared.LandlordChaseNoteModel })
  chaseNotes?: LandlordChaseNoteModel[];

  @Metadata({ data: "json, name=RentCollected" })
  rentCollected?: number;

  @Metadata({ data: "json, name=RentOutstanding", elemType: shared.LandlordRentOustandingItem })
  rentOutstanding?: LandlordRentOustandingItem[];

  @Metadata({ data: "json, name=TotalRentArrears" })
  totalRentArrears?: number;
}
