import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest
/** 
 * Request for CreateAppsScriptProject rpc call.
**/
export class GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appsScriptProject" })
  appsScriptProject?: string;

  @SpeakeasyMetadata({ data: "json, name=authConfigId" })
  authConfigId?: string;
}
