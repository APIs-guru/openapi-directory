import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum {
    BadLocationReasonUnspecified = "BAD_LOCATION_REASON_UNSPECIFIED",
    Other = "OTHER",
    NotPedestrianAccessible = "NOT_PEDESTRIAN_ACCESSIBLE",
    NotOpenToPublic = "NOT_OPEN_TO_PUBLIC",
    PermanentlyClosed = "PERMANENTLY_CLOSED",
    TemporarilyInaccessible = "TEMPORARILY_INACCESSIBLE"
}
/**
 * A report submitted by a player about a playable location that is considered inappropriate for use in the game.
**/
export declare class GoogleMapsPlayablelocationsV3PlayerReport extends SpeakeasyBase {
    languageCode?: string;
    locationName?: string;
    reasonDetails?: string;
    reasons?: GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[];
}
