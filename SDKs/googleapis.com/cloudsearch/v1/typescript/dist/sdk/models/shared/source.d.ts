import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SourcePredefinedSourceEnum {
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
/**
 * Defines sources for the suggest/search APIs.
**/
export declare class Source extends SpeakeasyBase {
    name?: string;
    predefinedSource?: SourcePredefinedSourceEnum;
}
