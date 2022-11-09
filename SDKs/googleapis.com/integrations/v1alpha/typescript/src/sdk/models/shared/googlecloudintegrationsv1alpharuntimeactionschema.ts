import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaRuntimeActionSchema
/** 
 * Metadata of an action, including schemas for its inputs and outputs.
**/
export class GoogleCloudIntegrationsV1alphaRuntimeActionSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=inputSchema" })
  inputSchema?: string;

  @Metadata({ data: "json, name=outputSchema" })
  outputSchema?: string;
}
