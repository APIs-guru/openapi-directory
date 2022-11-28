import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";



// SavedQuery
/** 
 * The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export class SavedQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=matterId" })
  matterId?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;

  @SpeakeasyMetadata({ data: "json, name=savedQueryId" })
  savedQueryId?: string;
}
