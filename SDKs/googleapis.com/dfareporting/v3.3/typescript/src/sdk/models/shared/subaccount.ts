import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Subaccount
/** 
 * Contains properties of a Campaign Manager subaccount.
**/
export class Subaccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=availablePermissionIds" })
  availablePermissionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
