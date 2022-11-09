import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordMaintenanceJobNoteModel
/** 
 * Maintenance Job Note Helper Model:-
**/
export class LandlordMaintenanceJobNoteModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=NoteContents" })
  noteContents?: string;

  @Metadata({ data: "json, name=OID" })
  oid?: string;
}
