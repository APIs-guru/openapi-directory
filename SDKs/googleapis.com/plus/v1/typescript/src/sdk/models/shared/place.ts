import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaceAddress
/** 
 * The physical address of the place.
**/
export class PlaceAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;
}


// PlacePosition
/** 
 * The position of the place.
**/
export class PlacePosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class Place extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PlaceAddress;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: PlacePosition;
}
