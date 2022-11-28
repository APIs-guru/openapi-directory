import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1GcsPrefix
/** 
 * Specifies all documents on Cloud Storage with a common prefix.
**/
export class GoogleCloudDocumentaiV1GcsPrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUriPrefix" })
  gcsUriPrefix?: string;
}
