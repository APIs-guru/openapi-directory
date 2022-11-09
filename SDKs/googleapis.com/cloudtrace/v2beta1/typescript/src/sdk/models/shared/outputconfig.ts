import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputConfig
/** 
 * OutputConfig contains a destination for writing trace data.
**/
export class OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;
}
