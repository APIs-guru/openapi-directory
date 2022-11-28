import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1TextMetadata
/** 
 * Metadata for the text.
**/
export class GoogleCloudDatalabelingV1beta1TextMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
