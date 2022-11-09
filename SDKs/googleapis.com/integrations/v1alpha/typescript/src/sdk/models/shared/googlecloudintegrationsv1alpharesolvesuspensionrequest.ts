import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaSuspension } from "./googlecloudintegrationsv1alphasuspension";


// GoogleCloudIntegrationsV1alphaResolveSuspensionRequest
/** 
 * Request for [Suspensions.ResolveSuspensions].
**/
export class GoogleCloudIntegrationsV1alphaResolveSuspensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=suspension" })
  suspension?: GoogleCloudIntegrationsV1alphaSuspension;
}
