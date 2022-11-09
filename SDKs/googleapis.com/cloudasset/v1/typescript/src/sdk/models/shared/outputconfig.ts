import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { GcsDestination } from "./gcsdestination";


// OutputConfig
/** 
 * Output configuration for export assets destination.
**/
export class OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: BigQueryDestination;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
