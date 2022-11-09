import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAccess } from "./accountaccess";
import { ContainerAccess } from "./containeraccess";


// UserPermission
/** 
 * Represents a user's permissions to an account and its container.
**/
export class UserPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountAccess" })
  accountAccess?: AccountAccess;

  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerAccess", elemType: shared.ContainerAccess })
  containerAccess?: ContainerAccess[];

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
