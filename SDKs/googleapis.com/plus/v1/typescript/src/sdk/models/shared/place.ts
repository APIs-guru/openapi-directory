import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaceAddress
/** 
 * The physical address of the place.
**/
export class PlaceAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=formatted" })
  formatted?: string;
}


// PlacePosition
/** 
 * The position of the place.
**/
export class PlacePosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class Place extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PlaceAddress;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=position" })
  position?: PlacePosition;
}
