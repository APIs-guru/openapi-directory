import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";



// GoogleCloudIntegrationsV1alphaEventParameter
/** 
 * This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
**/
export class GoogleCloudIntegrationsV1alphaEventParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GoogleCloudIntegrationsV1alphaValueType;
}
