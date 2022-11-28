import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invite } from "./invite";
import { UserMetadata } from "./usermetadata";
import { UserProfile } from "./userprofile";



export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatarUrl" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstAccessAt" })
  firstAccessAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invite" })
  invite?: Invite;

  @SpeakeasyMetadata({ data: "json, name=lastAccessAt" })
  lastAccessAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: UserMetadata;

  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserProfile;
}
