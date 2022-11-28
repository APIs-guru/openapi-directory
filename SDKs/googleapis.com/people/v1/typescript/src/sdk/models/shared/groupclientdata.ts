import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupClientData
/** 
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
**/
export class GroupClientData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
