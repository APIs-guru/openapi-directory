import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocationKey
/** 
 * Alternate/surrogate key references for a location.
**/
export class LocationKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=explicitNoPlaceId" })
  explicitNoPlaceId?: boolean;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=plusPageId" })
  plusPageId?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
