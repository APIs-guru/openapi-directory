import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaceInfo
/** 
 * Defines an area that's represented by a place ID.
**/
export class PlaceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=placeName" })
  placeName?: string;
}
