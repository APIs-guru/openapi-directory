import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata
/** 
 * Metadata for global schema behavior.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentAllowMultipleLabels" })
  documentAllowMultipleLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=documentSplitter" })
  documentSplitter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefixedNamingOnProperties" })
  prefixedNamingOnProperties?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipNamingValidation" })
  skipNamingValidation?: boolean;
}
