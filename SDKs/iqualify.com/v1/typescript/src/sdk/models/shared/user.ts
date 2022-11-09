import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: UserMetadata;

  @Metadata({ data: "json, name=personId" })
  personId?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: UserProfileRequest;

  @Metadata({ data: "json, name=sendInvite" })
  sendInvite?: boolean;
}
