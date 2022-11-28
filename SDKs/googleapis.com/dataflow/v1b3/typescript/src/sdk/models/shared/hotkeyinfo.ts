import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HotKeyInfo
/** 
 * Information about a hot key.
**/
export class HotKeyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hotKeyAge" })
  hotKeyAge?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=keyTruncated" })
  keyTruncated?: boolean;
}
