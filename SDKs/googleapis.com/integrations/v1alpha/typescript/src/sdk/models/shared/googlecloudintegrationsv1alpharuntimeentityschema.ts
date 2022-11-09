import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaRuntimeEntitySchema
/** 
 * Metadata of an entity, including a schema for its properties.
**/
export class GoogleCloudIntegrationsV1alphaRuntimeEntitySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayFieldSchema" })
  arrayFieldSchema?: string;

  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=fieldSchema" })
  fieldSchema?: string;
}
