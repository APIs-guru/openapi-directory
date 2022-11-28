import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo
/** 
 * Information about the upcoming deprecation of this processor version.
**/
export class GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecationTime" })
  deprecationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=replacementProcessorVersion" })
  replacementProcessorVersion?: string;
}
