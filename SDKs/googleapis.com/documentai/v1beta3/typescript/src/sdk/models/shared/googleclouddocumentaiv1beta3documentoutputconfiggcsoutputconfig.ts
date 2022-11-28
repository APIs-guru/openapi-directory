import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig
/** 
 * The configuration used when outputting documents.
**/
export class GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
