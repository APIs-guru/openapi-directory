import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserPicture
/** 
 * The user's profile picture.
**/
export class UserPicture extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// User
/** 
 * Information about a Drive user.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=isAuthenticatedUser" })
  isAuthenticatedUser?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @Metadata({ data: "json, name=picture" })
  picture?: UserPicture;
}
