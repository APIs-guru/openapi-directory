import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1DocumentSchemaMetadata
/** 
 * Metadata for global schema behavior.
**/
export class GoogleCloudDocumentaiV1DocumentSchemaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentAllowMultipleLabels" })
  documentAllowMultipleLabels?: boolean;

  @Metadata({ data: "json, name=documentSplitter" })
  documentSplitter?: boolean;

  @Metadata({ data: "json, name=prefixedNamingOnProperties" })
  prefixedNamingOnProperties?: boolean;

  @Metadata({ data: "json, name=skipNamingValidation" })
  skipNamingValidation?: boolean;
}
