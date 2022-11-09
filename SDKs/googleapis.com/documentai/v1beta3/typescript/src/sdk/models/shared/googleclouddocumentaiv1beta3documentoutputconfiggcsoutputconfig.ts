import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig
/** 
 * The configuration used when outputting documents.
**/
export class GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;
}
