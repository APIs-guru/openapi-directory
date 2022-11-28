import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invite } from "./invite";
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";



export class OfferingUserAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=invite" })
  invite?: Invite;

  @SpeakeasyMetadata({ data: "json, name=isFacilitator" })
  isFacilitator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMarker" })
  isMarker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=sendNotificationEmail" })
  sendNotificationEmail?: boolean;
}
