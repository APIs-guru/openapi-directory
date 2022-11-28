import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: string;
}
