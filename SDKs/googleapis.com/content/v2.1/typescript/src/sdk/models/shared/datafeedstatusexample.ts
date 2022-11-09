import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatafeedStatusExample
/** 
 * An example occurrence for a particular error.
**/
export class DatafeedStatusExample extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=lineNumber" })
  lineNumber?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
