import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DuplicateAccessEnum {
    AccessUnspecified = "ACCESS_UNSPECIFIED",
    AccessUnknown = "ACCESS_UNKNOWN",
    Allowed = "ALLOWED",
    Insufficient = "INSUFFICIENT"
}


// Duplicate
/** 
 * Information about the location that this location duplicates.
**/
export class Duplicate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: DuplicateAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;
}
