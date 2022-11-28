import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordMaintenanceJobNoteModel
/** 
 * Maintenance Job Note Helper Model:-
**/
export class LandlordMaintenanceJobNoteModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=NoteContents" })
  noteContents?: string;

  @SpeakeasyMetadata({ data: "json, name=OID" })
  oid?: string;
}
