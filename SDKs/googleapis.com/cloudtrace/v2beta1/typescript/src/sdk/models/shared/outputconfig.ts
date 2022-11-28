import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputConfig
/** 
 * OutputConfig contains a destination for writing trace data.
**/
export class OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;
}
