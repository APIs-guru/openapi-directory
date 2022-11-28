import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotesProperties
/** 
 * The properties of Page that are only relevant for pages with page_type NOTES.
**/
export class NotesProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=speakerNotesObjectId" })
  speakerNotesObjectId?: string;
}
