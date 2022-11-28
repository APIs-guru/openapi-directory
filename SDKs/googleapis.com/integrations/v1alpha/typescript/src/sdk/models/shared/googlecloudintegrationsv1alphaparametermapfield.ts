import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";



// GoogleCloudIntegrationsV1alphaParameterMapField
/** 
 * Field represents either the key or value in an entry.
**/
export class GoogleCloudIntegrationsV1alphaParameterMapField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=literalValue" })
  literalValue?: GoogleCloudIntegrationsV1alphaValueType;

  @SpeakeasyMetadata({ data: "json, name=referenceKey" })
  referenceKey?: string;
}
