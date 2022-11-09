import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// OutputConfig
/** 
 * The desired output location and metadata.
**/
export class OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
