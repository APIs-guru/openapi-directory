import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaRuntimeEntitySchema
/** 
 * Metadata of an entity, including a schema for its properties.
**/
export class GoogleCloudIntegrationsV1alphaRuntimeEntitySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayFieldSchema" })
  arrayFieldSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldSchema" })
  fieldSchema?: string;
}
