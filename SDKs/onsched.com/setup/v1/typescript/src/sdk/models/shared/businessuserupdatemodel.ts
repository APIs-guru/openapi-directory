import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BusinessUserUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=sendRegistrationInvite" })
  sendRegistrationInvite?: boolean;
}
