import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionInput } from "./googlecloudintegrationsv1alphasuspension";



// GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput
/** 
 * Request for [Suspensions.ResolveSuspensions].
**/
export class GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suspension" })
  suspension?: GoogleCloudIntegrationsV1alphaSuspensionInput;
}
