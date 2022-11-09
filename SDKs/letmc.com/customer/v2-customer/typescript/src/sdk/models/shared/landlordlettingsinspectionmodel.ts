import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordLettingsInspectionModel
/** 
 * Lettings Inspection
**/
export class LandlordLettingsInspectionModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=InspectionDate" })
  inspectionDate?: Date;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;
}
