import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HotKeyInfo
/** 
 * Information about a hot key.
**/
export class HotKeyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=hotKeyAge" })
  hotKeyAge?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=keyTruncated" })
  keyTruncated?: boolean;
}
