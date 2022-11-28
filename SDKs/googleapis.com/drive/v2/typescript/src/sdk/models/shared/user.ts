import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserPicture
/** 
 * The user's profile picture.
**/
export class UserPicture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// User
/** 
 * Information about a Drive user.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=isAuthenticatedUser" })
  isAuthenticatedUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @SpeakeasyMetadata({ data: "json, name=picture" })
  picture?: UserPicture;
}
