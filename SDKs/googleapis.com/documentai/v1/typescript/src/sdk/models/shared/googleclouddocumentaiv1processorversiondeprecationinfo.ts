import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo
/** 
 * Information about the upcoming deprecation of this processor version.
**/
export class GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecationTime" })
  deprecationTime?: string;

  @Metadata({ data: "json, name=replacementProcessorVersion" })
  replacementProcessorVersion?: string;
}
