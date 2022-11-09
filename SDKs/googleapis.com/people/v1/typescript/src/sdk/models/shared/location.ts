import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Location
/** 
 * A person's location.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @Metadata({ data: "json, name=current" })
  current?: boolean;

  @Metadata({ data: "json, name=deskCode" })
  deskCode?: string;

  @Metadata({ data: "json, name=floor" })
  floor?: string;

  @Metadata({ data: "json, name=floorSection" })
  floorSection?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
