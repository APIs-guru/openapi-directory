import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LodgingMetadata
/** 
 * Metadata for the Lodging.
**/
export class LodgingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
