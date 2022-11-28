import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// OutputConfig
/** 
 * Output configuration for export assets destination.
**/
export class OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
