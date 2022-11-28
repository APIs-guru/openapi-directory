import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SourcePredefinedSourceEnum {
    None = "NONE",
    QueryHistory = "QUERY_HISTORY",
    Person = "PERSON",
    GoogleDrive = "GOOGLE_DRIVE",
    GoogleGmail = "GOOGLE_GMAIL",
    GoogleSites = "GOOGLE_SITES",
    GoogleGroups = "GOOGLE_GROUPS",
    GoogleCalendar = "GOOGLE_CALENDAR",
    GoogleKeep = "GOOGLE_KEEP"
}


// Source
/** 
 * Defines sources for the suggest/search APIs.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=predefinedSource" })
  predefinedSource?: SourcePredefinedSourceEnum;
}
