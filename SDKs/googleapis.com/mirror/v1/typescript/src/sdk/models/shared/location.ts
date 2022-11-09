import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Location
/** 
 * A geographic location that can be associated with a timeline item.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
