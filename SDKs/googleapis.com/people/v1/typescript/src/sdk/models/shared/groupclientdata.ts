import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupClientData
/** 
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
**/
export class GroupClientData extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
