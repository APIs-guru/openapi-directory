import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3GcsPrefix
/** 
 * Specifies all documents on Cloud Storage with a common prefix.
**/
export class GoogleCloudDocumentaiV1beta3GcsPrefix extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsUriPrefix" })
  gcsUriPrefix?: string;
}
