import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FormatMessage
/** 
 * Represents a message with parameters.
**/
export class FormatMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: string[];
}
