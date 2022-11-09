import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * Information about a Drive user.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=me" })
  me?: boolean;

  @Metadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @Metadata({ data: "json, name=photoLink" })
  photoLink?: string;
}
