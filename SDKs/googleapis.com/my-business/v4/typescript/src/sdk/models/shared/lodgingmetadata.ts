import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LodgingMetadata
/** 
 * Metadata for the Lodging.
**/
export class LodgingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
