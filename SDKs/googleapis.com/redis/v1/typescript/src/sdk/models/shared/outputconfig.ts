import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// OutputConfig
/** 
 * The output content
**/
export class OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
