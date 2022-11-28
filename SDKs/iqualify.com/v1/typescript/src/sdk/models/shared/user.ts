import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: UserMetadata;

  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserProfileRequest;

  @SpeakeasyMetadata({ data: "json, name=sendInvite" })
  sendInvite?: boolean;
}
