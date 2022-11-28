import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsScriptTypeUser
/** 
 * A simple user profile resource.
**/
export class GoogleAppsScriptTypeUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;
}
