import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TruncatableString
/** 
 * Represents a string that might be shortened to a specified length.
**/
export class TruncatableString extends SpeakeasyBase {
  @Metadata({ data: "json, name=truncatedByteCount" })
  truncatedByteCount?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
