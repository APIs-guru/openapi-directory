import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaParameterMapField } from "./googlecloudintegrationsv1alphaparametermapfield";
import { GoogleCloudIntegrationsV1alphaParameterMapField } from "./googlecloudintegrationsv1alphaparametermapfield";


// GoogleCloudIntegrationsV1alphaParameterMapEntry
/** 
 * Entry is a pair of key and value.
**/
export class GoogleCloudIntegrationsV1alphaParameterMapEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: GoogleCloudIntegrationsV1alphaParameterMapField;

  @Metadata({ data: "json, name=value" })
  value?: GoogleCloudIntegrationsV1alphaParameterMapField;
}
