import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * Information about a Drive user.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=me" })
  me?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @SpeakeasyMetadata({ data: "json, name=photoLink" })
  photoLink?: string;
}
