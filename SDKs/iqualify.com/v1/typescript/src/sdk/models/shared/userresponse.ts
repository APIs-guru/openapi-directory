import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Invite } from "./invite";
import { UserMetadata } from "./usermetadata";
import { UserProfile } from "./userprofile";


export class UserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatarUrl" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstAccessAt" })
  firstAccessAt?: Date;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invite" })
  invite?: Invite;

  @Metadata({ data: "json, name=lastAccessAt" })
  lastAccessAt?: Date;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: UserMetadata;

  @Metadata({ data: "json, name=personId" })
  personId?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: UserProfile;
}
