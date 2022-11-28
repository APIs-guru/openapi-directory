import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocationKey
/** 
 * Alternate/surrogate key references for a location.
**/
export class LocationKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitNoPlaceId" })
  explicitNoPlaceId?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=plusPageId" })
  plusPageId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
