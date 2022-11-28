import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormatMessage
/** 
 * Represents a message with parameters.
**/
export class FormatMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: string[];
}
