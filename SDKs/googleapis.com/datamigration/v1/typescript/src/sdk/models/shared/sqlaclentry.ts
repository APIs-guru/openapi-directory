import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlAclEntry
/** 
 * An entry for an Access Control list.
**/
export class SqlAclEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
