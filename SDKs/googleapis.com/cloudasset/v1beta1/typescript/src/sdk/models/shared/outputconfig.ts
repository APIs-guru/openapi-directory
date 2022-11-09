import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// OutputConfig
/** 
 * Output configuration for export assets destination.
**/
export class OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
