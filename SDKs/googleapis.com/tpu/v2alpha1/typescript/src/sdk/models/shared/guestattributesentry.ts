import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GuestAttributesEntry
/** 
 * A guest attributes namespace/key/value entry.
**/
export class GuestAttributesEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
