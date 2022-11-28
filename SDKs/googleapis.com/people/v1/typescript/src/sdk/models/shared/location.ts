import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";



// Location
/** 
 * A person's location.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deskCode" })
  deskCode?: string;

  @SpeakeasyMetadata({ data: "json, name=floor" })
  floor?: string;

  @SpeakeasyMetadata({ data: "json, name=floorSection" })
  floorSection?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// LocationInput
/** 
 * A person's location.
**/
export class LocationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deskCode" })
  deskCode?: string;

  @SpeakeasyMetadata({ data: "json, name=floor" })
  floor?: string;

  @SpeakeasyMetadata({ data: "json, name=floorSection" })
  floorSection?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
