import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaRuntimeActionSchema
/** 
 * Metadata of an action, including schemas for its inputs and outputs.
**/
export class GoogleCloudIntegrationsV1alphaRuntimeActionSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=inputSchema" })
  inputSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=outputSchema" })
  outputSchema?: string;
}
