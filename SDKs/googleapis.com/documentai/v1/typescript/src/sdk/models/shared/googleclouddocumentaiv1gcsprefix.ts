import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1GcsPrefix
/** 
 * Specifies all documents on Cloud Storage with a common prefix.
**/
export class GoogleCloudDocumentaiV1GcsPrefix extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsUriPrefix" })
  gcsUriPrefix?: string;
}
