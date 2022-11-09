import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaceInfo
/** 
 * Defines an area that's represented by a place ID.
**/
export class PlaceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=placeName" })
  placeName?: string;
}
