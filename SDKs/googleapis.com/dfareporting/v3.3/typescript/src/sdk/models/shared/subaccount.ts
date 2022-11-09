import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Subaccount
/** 
 * Contains properties of a Campaign Manager subaccount.
**/
export class Subaccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=availablePermissionIds" })
  availablePermissionIds?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
