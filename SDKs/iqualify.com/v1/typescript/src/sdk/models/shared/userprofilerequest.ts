import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
