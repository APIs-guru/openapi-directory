import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";


// GoogleCloudIntegrationsV1alphaEventParameter
/** 
 * This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
**/
export class GoogleCloudIntegrationsV1alphaEventParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: GoogleCloudIntegrationsV1alphaValueType;
}
