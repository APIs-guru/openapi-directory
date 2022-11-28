import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1DocumentSchemaMetadata
/** 
 * Metadata for global schema behavior.
**/
export class GoogleCloudDocumentaiV1DocumentSchemaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentAllowMultipleLabels" })
  documentAllowMultipleLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=documentSplitter" })
  documentSplitter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefixedNamingOnProperties" })
  prefixedNamingOnProperties?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipNamingValidation" })
  skipNamingValidation?: boolean;
}
