import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GuestAttributesEntry
/** 
 * A guest attributes namespace/key/value entry.
**/
export class GuestAttributesEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
