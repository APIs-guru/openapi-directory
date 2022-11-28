import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest
/** 
 * Request for LinkAppsScriptProject rpc call.
**/
export class GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;
}
