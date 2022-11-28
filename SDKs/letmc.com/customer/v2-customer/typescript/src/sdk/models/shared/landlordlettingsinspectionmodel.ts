import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordLettingsInspectionModel
/** 
 * Lettings Inspection
**/
export class LandlordLettingsInspectionModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InspectionDate" })
  inspectionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;
}
