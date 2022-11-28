import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3GcsPrefix
/** 
 * Specifies all documents on Cloud Storage with a common prefix.
**/
export class GoogleCloudDocumentaiV1beta3GcsPrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUriPrefix" })
  gcsUriPrefix?: string;
}
