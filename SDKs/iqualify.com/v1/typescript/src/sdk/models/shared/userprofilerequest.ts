import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
