import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaParameterMapField } from "./googlecloudintegrationsv1alphaparametermapfield";



// GoogleCloudIntegrationsV1alphaParameterMapEntry
/** 
 * Entry is a pair of key and value.
**/
export class GoogleCloudIntegrationsV1alphaParameterMapEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: GoogleCloudIntegrationsV1alphaParameterMapField;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GoogleCloudIntegrationsV1alphaParameterMapField;
}
