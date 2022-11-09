import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DuplicateAccessEnum {
    AccessUnspecified = "ACCESS_UNSPECIFIED"
,    AccessUnknown = "ACCESS_UNKNOWN"
,    Allowed = "ALLOWED"
,    Insufficient = "INSUFFICIENT"
}


// Duplicate
/** 
 * Information about the location that this location duplicates.
**/
export class Duplicate extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: DuplicateAccessEnum;

  @Metadata({ data: "json, name=locationName" })
  locationName?: string;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;
}
