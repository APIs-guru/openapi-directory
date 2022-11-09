import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfile } from "./userprofile";


export class OfferingUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatarUrl" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=evaluatedBy" })
  evaluatedBy?: string[];

  @Metadata({ data: "json, name=evaluates" })
  evaluates?: string[];

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isFacilitator" })
  isFacilitator?: boolean;

  @Metadata({ data: "json, name=isMarker" })
  isMarker?: boolean;

  @Metadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=markedBy" })
  markedBy?: string[];

  @Metadata({ data: "json, name=marks" })
  marks?: string[];

  @Metadata({ data: "json, name=personId" })
  personId?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: UserProfile;
}
