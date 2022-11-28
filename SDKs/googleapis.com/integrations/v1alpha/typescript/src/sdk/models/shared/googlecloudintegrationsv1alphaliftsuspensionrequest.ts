import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaLiftSuspensionRequest
/** 
 * Request for lift Suspension
**/
export class GoogleCloudIntegrationsV1alphaLiftSuspensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suspensionResult" })
  suspensionResult?: string;
}
