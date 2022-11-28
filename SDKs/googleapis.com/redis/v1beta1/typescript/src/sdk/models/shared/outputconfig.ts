import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// OutputConfig
/** 
 * The output content
**/
export class OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
