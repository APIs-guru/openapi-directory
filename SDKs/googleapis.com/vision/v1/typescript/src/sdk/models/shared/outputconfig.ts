import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// OutputConfig
/** 
 * The desired output location and metadata.
**/
export class OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
