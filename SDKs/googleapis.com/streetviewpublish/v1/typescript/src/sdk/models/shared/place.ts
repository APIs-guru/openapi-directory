import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Place
/** 
 * Place metadata for an entity.
**/
export class Place extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;
}


// PlaceInput
/** 
 * Place metadata for an entity.
**/
export class PlaceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;
}
