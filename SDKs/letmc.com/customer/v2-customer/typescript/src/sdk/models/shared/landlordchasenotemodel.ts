import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordChaseNoteModel
/** 
 * Landlord Arrears Chase Note.
**/
export class LandlordChaseNoteModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=NoteType" })
  noteType?: string;

  @SpeakeasyMetadata({ data: "json, name=TenantID" })
  tenantId?: string;
}
