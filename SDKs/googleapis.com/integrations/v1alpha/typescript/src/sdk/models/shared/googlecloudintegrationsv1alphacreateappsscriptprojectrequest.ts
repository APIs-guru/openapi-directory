import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest
/** 
 * Request for CreateAppsScriptProject rpc call.
**/
export class GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appsScriptProject" })
  appsScriptProject?: string;

  @Metadata({ data: "json, name=authConfigId" })
  authConfigId?: string;
}
