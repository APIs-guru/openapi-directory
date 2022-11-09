import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AclEntry
/** 
 * An entry for an Access Control list.
**/
export class AclEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
