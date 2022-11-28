import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatafeedStatusExample
/** 
 * An example occurrence for a particular error.
**/
export class DatafeedStatusExample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineNumber" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
