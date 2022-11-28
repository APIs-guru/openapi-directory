import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";



export class OfferingUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatarUrl" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluatedBy" })
  evaluatedBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=evaluates" })
  evaluates?: string[];

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isFacilitator" })
  isFacilitator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMarker" })
  isMarker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=markedBy" })
  markedBy?: string[];

  @SpeakeasyMetadata({ data: "json, name=marks" })
  marks?: string[];

  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserProfile;
}
