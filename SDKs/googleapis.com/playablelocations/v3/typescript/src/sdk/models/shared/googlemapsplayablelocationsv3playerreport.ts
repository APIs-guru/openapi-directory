import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum {
    BadLocationReasonUnspecified = "BAD_LOCATION_REASON_UNSPECIFIED",
    Other = "OTHER",
    NotPedestrianAccessible = "NOT_PEDESTRIAN_ACCESSIBLE",
    NotOpenToPublic = "NOT_OPEN_TO_PUBLIC",
    PermanentlyClosed = "PERMANENTLY_CLOSED",
    TemporarilyInaccessible = "TEMPORARILY_INACCESSIBLE"
}


// GoogleMapsPlayablelocationsV3PlayerReport
/** 
 * A report submitted by a player about a playable location that is considered inappropriate for use in the game.
**/
export class GoogleMapsPlayablelocationsV3PlayerReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonDetails" })
  reasonDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons" })
  reasons?: GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[];
}
