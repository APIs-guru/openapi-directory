import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TruncatableString
/** 
 * Represents a string that might be shortened to a specified length.
**/
export class TruncatableString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=truncatedByteCount" })
  truncatedByteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
