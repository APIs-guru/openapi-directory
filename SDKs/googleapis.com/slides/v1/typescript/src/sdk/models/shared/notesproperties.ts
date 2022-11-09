import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotesProperties
/** 
 * The properties of Page that are only relevant for pages with page_type NOTES.
**/
export class NotesProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=speakerNotesObjectId" })
  speakerNotesObjectId?: string;
}
