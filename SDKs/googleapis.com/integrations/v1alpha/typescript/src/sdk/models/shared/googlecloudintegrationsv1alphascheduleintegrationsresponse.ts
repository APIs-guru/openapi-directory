import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse
/** 
 * The response for executing an integration.
**/
export class GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionInfoIds" })
  executionInfoIds?: string[];
}
