import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BusinessUserUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=sendRegistrationInvite" })
  sendRegistrationInvite?: boolean;
}
