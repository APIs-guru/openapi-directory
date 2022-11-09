import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";


// SavedQuery
/** 
 * The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export class SavedQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=matterId" })
  matterId?: string;

  @Metadata({ data: "json, name=query" })
  query?: Query;

  @Metadata({ data: "json, name=savedQueryId" })
  savedQueryId?: string;
}
