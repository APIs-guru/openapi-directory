import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaUsernameAndPassword
/** 
 * Username and password pair.
**/
export class GoogleCloudIntegrationsV1alphaUsernameAndPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
