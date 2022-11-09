import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsScriptTypeUser
/** 
 * A simple user profile resource.
**/
export class GoogleAppsScriptTypeUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;
}
