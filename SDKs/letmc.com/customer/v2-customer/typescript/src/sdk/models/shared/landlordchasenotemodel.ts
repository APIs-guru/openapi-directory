import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordChaseNoteModel
/** 
 * Landlord Arrears Chase Note.
**/
export class LandlordChaseNoteModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Note" })
  note?: string;

  @Metadata({ data: "json, name=NoteType" })
  noteType?: string;

  @Metadata({ data: "json, name=TenantID" })
  tenantId?: string;
}
