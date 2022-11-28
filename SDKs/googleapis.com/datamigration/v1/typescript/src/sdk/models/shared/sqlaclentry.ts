import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlAclEntry
/** 
 * An entry for an Access Control list.
**/
export class SqlAclEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
