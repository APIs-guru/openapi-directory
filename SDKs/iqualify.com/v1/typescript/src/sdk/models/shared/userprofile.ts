import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: string;
}
