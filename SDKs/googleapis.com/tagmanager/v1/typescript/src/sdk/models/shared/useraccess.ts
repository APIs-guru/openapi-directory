import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
import { ContainerAccess } from "./containeraccess";



// UserAccess
/** 
 * Represents a user's permissions to an account and its container.
**/
export class UserAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountAccess" })
  accountAccess?: AccountAccess;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerAccess", elemType: ContainerAccess })
  containerAccess?: ContainerAccess[];

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionId" })
  permissionId?: string;
}
